import React from 'react';
import { Link } from 'react-router-dom';
import { AddressInput } from '../Components/Address/AddressInput';
import { useAuth } from '../Context/AuthContext';

export const Checkout = () => {
    const { username } = useAuth().userData;
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            <AddressInput />
            <Link to={`/${username}/myaccount`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                    Continue to Payment
                </button>
            </Link>
        </div>
    );
};


