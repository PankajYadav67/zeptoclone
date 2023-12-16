import React, { useState } from 'react';
import { LocationCard } from '../Loaction/LocationCard';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";




export const ZeptoNavbar = () => {
  const [showCard, setShowCard] = useState(false);

  const handleLocationClick = () => {
    setShowCard(true);
  };
  
  return (
    <div className="flex flex-col overflow-hidden md:flex-row justify-evenly items-center bg-[#3a0463] h-20 font-medium text-white">

      <div className="w-full md:w-24 mb-4 md:mb-0 ">
        <Link to="/">
          <img
            className="w-full h-auto object-contain"
            src="https://www.zeptonow.com/images/logo.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="h-9 mt-2 opacity-50 text-2xl">
        <h1>|</h1>
      </div>

      <div className="text-center md:text-left">
       <button onClick={handleLocationClick}>Location</button>
       {showCard && <LocationCard onClose={() => setShowCard(false)} />}
      </div>

      <div className="w-2/4 my-6 rounded">
        <input
          type="text"
          className="nav-input h-10  text-black w-full items-center rounded shadow-inner font-lota"
          placeholder="     Search for over 5000 products"
        />

      </div>

      <Link to="/login">
        <div className="font-Segoe UI Symbol text-lg flex items-center justify-between	" >
          <p className="ml-2 text-lg">My Account</p>
        </div>
      </Link>


      <div className="h-12 grid items-center my-3 justify-center w-full md:w-40 md:items-center md:justify-center md:my-2 md:ml-4">
        <button className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold  py-2 px-4 h-full rounded-lg flex items-center w-full">
          <FontAwesomeIcon icon={faBagShopping} style={{ color: "#ffffff" }} />
          <p className="ml-2">My Cart</p>
        </button>
      </div>


    </div>
  );
};
