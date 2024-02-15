import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Input = ({ setSearchText }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        // Trigger the search as the user types
        setSearchText(inputValue);
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                className="nav-input h-10 text-black w-full items-center rounded shadow-inner font-lota"
                placeholder="Search for over 5000 products"
                value={query}
                onChange={handleInputChange}
                onClick={() => navigate('/search')}
            />
        </div>
    );
};
