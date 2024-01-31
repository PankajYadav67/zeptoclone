import React, { useEffect, useState } from "react";
import { CarouselCards } from "./CarouselCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/actions/cartActions";

export const CarouselFetch = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { username } = useAuth().userData;
  const [jsonData, setJsonData] = useState([]);
  const { cartItems } = useSelector((state) => state.cartData);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/Data/trendingSearch.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

    // Additional effect for logged-in users
    if (isLoggedIn) {
      async function fetchCartData() {
        try {
          await dispatch(fetchCart(username));
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      }

      fetchCartData();
    }
  }, [dispatch, isLoggedIn,username]);

  useEffect(() => {
    console.log(cartItems);
    const dataToRender = jsonData.map(item => {
      const cartItem = cartItems.find(cart => cart.title === item.keyword);

      return {
        ...item,
        totalquantity: cartItem?.totalquantity || 0
      };
    });
    console.log(dataToRender);

    setJsonData(dataToRender);
  }, [cartItems])


  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg flex font-bold items-center">Trending Search</h1>
        <h1 className="text-lg flex font-bold items-center gap-3 text-[#FB3A68]">
          See All<FontAwesomeIcon icon={faArrowRight} style={{ color: "#FB3A68" }} />
        </h1>
      </div>
      <CarouselCards data={jsonData} />
    </div>
  );
};
