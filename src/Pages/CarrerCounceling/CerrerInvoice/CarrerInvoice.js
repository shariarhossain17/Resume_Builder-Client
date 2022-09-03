import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useOutletContext } from "react-router-dom";
import auth from '../../../firebase.init';
const CarrerInvoice = () => {
    const [user] = useAuthState(auth)
    const [userInfo, setUserinfo, price, serviceName] = useOutletContext();
    return (
        <div>
           <h1 className='text-2xl capitalize  mt-12 text-center text-primary'>{user?.displayName}</h1>
           <h1 className='text-xl   text-center text-primary'>Your Enroll {serviceName} successful </h1>


           <p className='text-center'>Download Your Invoice <Link className='text-primary font-[500]' to='/dashboard/order'>Go To Dashboard</Link> </p>
        </div>
    );
};

export default CarrerInvoice;