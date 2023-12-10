import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";



export const ZeptoNavbar = () => {
  return (
    <div className="navbar ">
      <div className="nav-logo ml-2 mb-2 ">
        <a href="/">
          <img
            className="logo"
            src="https://www.zeptonow.com/images/logo.svg"
            alt="logo"
          />
        </a>
      </div>

      <div className="h-9 mt-2 opacity-50 text-2xl">
        <h1>|</h1>
      </div>

      <div>
        <p className="font-lota text-2xl">Juhu</p>
      </div>

      <div className="w-2/4 my-6 rounded">
        <input
          type="text"
          className="nav-input font-light bg-zinc-100 shadow-inner font-lota"
          placeholder="     Search for over 5000 products"
        />

      </div>

      <Link to="/login">
        <div className="font-Segoe UI Symbol text-lg flex items-center justify-between	" >

          <p className="ml-2 text-lg">My Account</p>
        </div>


      </Link>


      <div className="h-16 my-2 w-40 items-center justify-center">
        <button className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold  py-2 px-4 h-full rounded-lg flex items-center w-full">
          <FontAwesomeIcon icon={faBagShopping} style={{ color: "#ffffff" }} />
          <p className="ml-2">My Cart</p>
        </button>
      </div>


    </div>
  );
};
