import React, { useState } from 'react';
import axios from "axios";

export const AddressInput = () => {
    const [address, setAddress] = useState('');

    const handleAddressChange = (e) => {
        e.pre
        setAddress(e.target.value);
    };

    const handleSaveAddress = async () => {
        try {
            const response = await axios.post('/api/addresses/save', {
                address
            });

            if (response.ok) {
                console.log('Address saved successfully');

            } else {
                console.error('Failed to save address');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-black text-gray-700">
                Address
            </label>
            <div className="flex">
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={handleAddressChange}
                    className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                    type="button"
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleSaveAddress}
                >
                    Save
                </button>
            </div>
        </div>
    );
};