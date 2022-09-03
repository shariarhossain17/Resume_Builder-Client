import React, { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";
import axiosPrivate from "../Api/axiosPrivate";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [userInfo, setUserinfo, price, serviceName,_id] = useOutletContext();
  const navigate = useNavigate();
  console.log(_id);
//   time
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;

  //   payment request api call

  useEffect(() => {
    if (price) {
      axiosPrivate
        .post("/create-payment-intent", { price })
        .then((response) => {
          if (response?.data?.clientSecret) {
            setClientSecret(response.data.clientSecret);
          }
        });
    }
  }, [price]);

  //   payment btn
  const handleSubmit = async (event) => {
    event.preventDefault();

    // userInfo
    const name = userInfo.name;
    const email = userInfo.email;
    const country = userInfo.country;

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCarderror(error?.message || "");
    setProcessing(true)

    if(processing){
        return <Loading/>
    }

    //   confirm payment

    if (name && email) {
      const { paymentIntent, error: paymentErr } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email: email,
            },
          },
        });

      if (paymentErr) {
        setCarderror(paymentErr?.message);
      } else {
        setCarderror("");
        Swal.fire({
            icon: "success",
            title: "your payment successful",
            showConfirmButton: false,
            timer: 1500,
          });
        const transictionId = paymentIntent.id

        // payment details store on database
        const paymentDetails = {
          name: name,
          email: email,
          country: country,
          paymentId: transictionId,
          price: price,
          serviceName: serviceName,
          time: dateTime,
        };

        axiosPrivate.post("/booking", paymentDetails).then((res) => {
            setProcessing(false);
        });
        navigate(`/resume-builder/career-counselling/${_id}/download-invoice`);
      }
    } else {
      navigate(`/resume-builder/career-counselling/${_id}`);
    }
  };

  return (
    <div className="card max-w-lg px-4 py-2 shadow-xl  rounded mt-6">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-right mt-4">
          <button
            className="btn btn-primary px-8 text-white"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
