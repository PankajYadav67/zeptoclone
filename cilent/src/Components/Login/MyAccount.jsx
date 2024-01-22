import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

export const MyAccount = () => {
  const navigate = useNavigate();
  const {logout,username} = useAuth();

  const handleLogout = () => {
    // Call the logout function from the AuthContext to update the context
    logout();
    navigate('/auth/login');
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md max-w-md">
      <h2 className="text-2xl font-bold mb-4">Account Overview</h2>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold">Username:</span> {username}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">_id:</span> {localStorage.getItem('_id')}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Email:</span> {localStorage.getItem('email')}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Phone Number:</span> {localStorage.getItem('phoneNumber')}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold py-2 px-4 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};
