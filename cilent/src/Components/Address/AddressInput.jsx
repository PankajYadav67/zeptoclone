import React, { useState } from 'react';
import axios from "axios";
import { URL } from '../../Api/EndPoints';
import { useAuth } from '../../Context/AuthContext';

export const AddressInput = () => {
    const [address, setAddress] = useState('');
    const { username } = useAuth().userData;

    const handleAddressChange = (e) => {
        e.preventDefault();
        setAddress(e.target.value);
    };

    const handleSaveAddress = async () => {
        try {
            const response = await axios.post(`${URL}/address/save`, {
                username,
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
            <label htmlFor="address" className="block text-xl font-black  text-gray-700">
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
                    className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-[#FB3A68]"
                />
                <button
                    type="button"
                    className="ml-2 px-4 py-2 bg-[#FB3A68] text-white rounded-md hover:bg-[#e94c4c] focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleSaveAddress}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

