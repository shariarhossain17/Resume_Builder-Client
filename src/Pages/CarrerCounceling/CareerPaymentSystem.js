import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const CareerPaymentSystem = ({ service }) => {
  const { serviceName, price,_id } = service;
  const [userInfo, setUserinfo] = useState({})
  return (
    <div>
      <h1 className="text-[25px] text-gray-700 mb-4">Choose product</h1>
      <div className="flex justify-between">
        <div>
          <p className="capitalize text-gray-500 font-[600]">
            WritoRCC {serviceName}
          </p>
        </div>
        <div>
          <p className="text-gray-500 font-[600]">USD {price}</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div>
          <p className="capitalize text-gray-500 font-[600]">
            Total Billed Now
          </p>
        </div>
        <div>
          <p className="text-gray-500 font-[600]">USD {price}</p>
        </div>
      </div>

      <div>
        <h4 className="mt-6 text-[25px] text-gray-700 mb-4">
          Billing & Payment
        </h4>
      </div>
      <Outlet context={[userInfo, setUserinfo, price, serviceName,_id]} />
    </div>
  );
};

export default CareerPaymentSystem;
