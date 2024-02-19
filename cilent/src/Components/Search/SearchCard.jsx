import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../Redux/actions/cartActions';

export const SearchCard = ({  searchText }) => {
    const [data,setData] = useState("");
    const { username } = useAuth().userData;
    const dispatch = useDispatch();
    const { isloggedIn } = useAuth();
    const [searchResults, setSearchResults] = useState([]);
    const [localTotalQuantity, setLocalTotalQuantity] = useState(data.totalquantity);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace '/api/search' with your actual backend API endpoint
                const response = await fetch(`/public/trendingSearch.json`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data when the searchText changes
     
    }, []);

    // const handleSort = (sortBy) => {
    //     let sortedDataCopy = [...searchResults];

    //     if (sortBy === 'price') {
    //         sortedDataCopy.sort((a, b) => a.price - b.price);
    //     } else if (sortBy === 'name') {
    //         sortedDataCopy.sort((a, b) => a.keyword.localeCompare(b.keyword));
    //     }

    //     setSearchResults(sortedDataCopy);
    // };


    const handleAddToCart = (newCount) => {
        const updatedCartItem = {
            username,
            
            token: 54321,
            totalquantity: newCount,
        };
        dispatch(updateCartItem(updatedCartItem));

        setLocalTotalQuantity(newCount);
    }

    const handlePlus = () => {
        const newCount = localTotalQuantity + 1;
        if (isloggedIn) {
            handleAddToCart(newCount);
        } else {
            // updateLocalStorage(newCount);
        }
    }

    const handleMinus = () => {
        if (localTotalQuantity > 0) {
            const newCount = localTotalQuantity - 1;
            if (isloggedIn) {
                handleAddToCart(newCount);
            } else {
                // updateLocalStorage(newCount);
            }
        }
    }


    

    return (
        <div>
            <div>
                {/* Your sorting buttons */}
                {/* <select onChange={(e) => handleSort(e.target.value)}>
                    <option value="price">Sort by Price</option>
                    <option value="name">Sort by Name</option>
                </select> */}
            </div>

            {/* Render search results */}
            {data.map((item) => (
                <div className="relative p-4 sm:w-full md:w-1/2 lg:w-1/3">
                    <div className="border-2 rounded-md p-4 shadow-xl relative">
                        <img src={item.image_url} alt={item.title} className="w-full h-40 object-contain mb-4 rounded-lg" />
                        <h3 className="text-lg font-semibold mb-2">{item.keyword}</h3>
                        <p className="text-gray-600 font-light mb-4">{item.quantity}</p>
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h6 className='font-bold mb-2 sm:mb-0'>{item.price}</h6>
                            <div className='flex shadow-2xl mt-2 sm:mt-0'>
                                {localTotalQuantity > 0 && (
                                    <button className='bg-[#FB3A68] text-white font-thin rounded-tl-lg  rounded-bl-lg py-1 px-2' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                                )}
                                <button className={` font-bold   py-1 px-2 ${localTotalQuantity === 0 ? " rounded-md border border-[#FB3A68]  text-[#FB3A68]  " : "bg-[#FB3A68] text-white"}`} value={localTotalQuantity} onClick={handlePlus}>
                                    {localTotalQuantity === 0 ? " Add " : localTotalQuantity}
                                </button>
                                {localTotalQuantity > 0 && (
                                    <button className='bg-[#FB3A68] text-white font-thin  rounded-tr-lg rounded-br-lg py-1 px-2' onClick={handlePlus}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
