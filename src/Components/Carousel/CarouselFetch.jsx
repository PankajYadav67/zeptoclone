import React, { useEffect, useState } from "react";
import { CarouselCards } from "./CarouselCards";


export const CarouselFetch = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className=" text-lg flex  items-center justify-between ">Trending Search</h1>
      <CarouselCards data={jsonData} />
    </div>
  );
};
