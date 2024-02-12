import React, { useState, useEffect } from 'react';
import { LocationCard } from '../Location/LocationCard';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../../Context/AuthContext';
import { SearchCard } from "../Search/SearchCard"

export const ZeptoNavbar = () => {
  const [showCard, setShowCard] = useState(false);
  const { isLoggedIn } = useAuth();
  const { username } = useAuth().userData;
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const handleSearchClick = () => {
    // Navigate to "/search" when the user clicks on the input field
    navigate('/search');
  };
  const handleLocationClick = () => {
    setShowCard(true);
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/Data/trendingSearch.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data when the component mounts or when searchText changes
    fetchData();
  }, [searchText]);

  return (
    <div className="  flex flex-col py-1 px-4 overflow-hidden md:flex-row justify-evenly items-center left-0 top-14 sm:top-0 w-full z-[200] lg:px-16 bg-[#3a0463] h-20 font-medium text-white">
      <div className="w-full md:w-24 mb-4 md:mb-0 ">
        {isLoggedIn ? (<Link to={`/${username}`}>
          <img
            className="w-full h-auto object-contain"
            src="https://www.zeptonow.com/images/logo.svg"
            alt="logo"
          />
        </Link>) : (<Link to="/">
          <img
            className="w-full h-auto object-contain"
            src="https://www.zeptonow.com/images/logo.svg"
            alt="logo"
          />
        </Link>)}
      </div>

      <div className="h-9 mt-2 opacity-50 text-2xl">
        <h1>|</h1>
      </div>

      <div className="text-center md:text-left">
        <button onClick={handleLocationClick}>Location</button>
        {showCard && <LocationCard onClose={() => setShowCard(false)} />}
      </div>

      <div className="w-2/4 my-6 rounded">
        <div className="flex items-center">
          <input
            type="text"
            className="nav-input h-10 text-black w-full items-center rounded shadow-inner font-lota"
            placeholder="Search for over 5000 products"
            value={searchText}
            onChange={handleSearchChange}
            onClick={handleSearchClick}
          />
        </div>
      </div>

      {searchResults.length > 0 && (
        <SearchCard data={searchResults} />
      )}
      {isLoggedIn ? (
        <Link to={`/${username}/myaccount`}>
          <div className="font-Segoe UI Symbol text-lg flex items-center justify-between">
            <p className="ml-2 text-lg">My Account</p>
          </div>
        </Link>
      ) : (
        <Link to="/auth/login">
          <div className="font-Segoe UI Symbol text-lg flex items-center justify-between">
            <p className="ml-2 text-lg">Login</p>
          </div>
        </Link>
      )}

      {isLoggedIn ? (<Link to={`/cart/${username}`}>
        <div className="h-12 grid items-center my-3 justify-center w-full md:w-40 md:items-center md:justify-center md:my-2 md:ml-4">
          <button className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold  py-2 px-4 h-full rounded-lg flex items-center w-full">
            <FontAwesomeIcon icon={faBagShopping} style={{ color: "#ffffff" }} />
            <p className="ml-2">My Cart</p>
          </button>
        </div>
      </Link>) : (<Link to="/cart">
        <div className="h-12 grid items-center my-3 justify-center w-full md:w-40 md:items-center md:justify-center md:my-2 md:ml-4">
          <button className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold  py-2 px-4 h-full rounded-lg flex items-center w-full">
            <FontAwesomeIcon icon={faBagShopping} style={{ color: "#ffffff" }} />
            <p className="ml-2">My Cart</p>
          </button>
        </div>
      </Link>)}


    </div>
  );
};
