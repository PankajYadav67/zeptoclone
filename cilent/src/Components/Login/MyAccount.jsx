import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const AccountTab = ({ title, isActive, onClick }) => (
  <div
    className={`cursor-pointer p-4 border-b-2 ${isActive ? 'border-[#3a0463] text-[#3a0463]' : 'border-transparent text-gray-700 hover:border-[#3a0463] hover:text-[#3a0463]'}`}
    onClick={onClick}
  >
    {title}
  </div>
);

export const MyAccount = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { username, email, phonenumber } = useAuth().userData;

  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    // Call the logout function from the AuthContext to update the context
    logout();
    navigate('/auth/login');
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-8 bg-white shadow-md max-w-3xl p-8">
      <div className="flex border-b mb-4">
        <AccountTab title="Overview" isActive={activeTab === 'overview'} onClick={() => switchTab('overview')} />
        <AccountTab title="Orders" isActive={activeTab === 'orders'} onClick={() => switchTab('orders')} />
        <AccountTab title="Settings" isActive={activeTab === 'settings'} onClick={() => switchTab('settings')} />
      </div>

      <div>
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#3a0463]">Account Overview</h2>
            <div className='mb-4 space-y-2' >

              <h1 className="text-gray-700">
                <span className="font-bold text-[#3a0463]">Username:</span> {username}
              </h1>
              <h1 className="text-gray-700">
                <span className="font-bold text-[#3a0463]">_id:</span> {localStorage.getItem('_id')}
              </h1>
              <h1 className="text-gray-700">
                <span className="font-bold text-[#3a0463]">Email:</span> {email}
              </h1>
              <h1 className="text-gray-700">
                <span className="font-bold text-[#3a0463]">Phone Number:</span> {phonenumber}
              </h1>

            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#3a0463]">Orders</h2>
            {"content for the orders tab ... "}
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#3a0463]">Settings</h2>
            {"content for the settings tab ..."}
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-[#EC525E] hover:bg-[#FB3A68] text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};


