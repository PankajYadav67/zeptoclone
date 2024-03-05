import React from 'react';
import { AddressInput } from '../Components/Address/AddressInput';

export const Checkout = () => {

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            <AddressInput/>
        </div>
    );
};
