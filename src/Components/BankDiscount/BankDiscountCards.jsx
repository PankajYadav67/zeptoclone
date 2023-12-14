import React, { useState } from 'react';
import { BankDiscountCard } from './BankDiscountCard';

export const BankDiscountCards = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + cardsPerPage, data.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };

  const renderPrevButton = startIndex > 0 && (
    <button onClick={handlePrev} className="flex-shrink-0 p-4 bg-gray-200 hover:bg-gray-300 rounded-full">
      <svg className="h-6 w-6 rounded" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
  );

  const renderNextButton = startIndex + cardsPerPage < data.length && (
    <button onClick={handleNext} className="flex-shrink-0 p-4 bg-gray-200  rounded-full hover:bg-gray-300">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  );

  return (
    <div className="flex items-center">
      {renderPrevButton}
      {data.slice(startIndex, startIndex + cardsPerPage).map((offer, index) => (
        <BankDiscountCard key={index} offer={offer} />
      ))}
      {renderNextButton}
    </div>
  );
};
