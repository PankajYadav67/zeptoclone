import React, { useEffect, useState } from "react";
import { BankDiscountCards } from "./BankDiscountCards";


export const FetchBankOffer = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data/discountOffers.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className=" text-bold flex items-center justify-between ">Bank Discount Offers</h1>
      <BankDiscountCards data={jsonData} />
    </div>
  );
};
