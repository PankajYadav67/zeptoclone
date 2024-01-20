import React, { useEffect, useState } from "react";
import { CarouselCards } from "./CarouselCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <div >
      <div className="flex justify-between">
        <h1 className=" text-lg flex font-bold items-center ">Trending Search</h1>
        <h1 className=" text-lg flex font-bold items-center gap-3 text-[#FB3A68]"> See All<FontAwesomeIcon icon={faArrowRight} style={{ color: "#FB3A68" }} /> </h1>
      </div>
      <CarouselCards data={jsonData} />
    </div>
  );
};
