import React, { useState, useEffect } from 'react';

export const SearchCard = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [sortedData, setSortedData] = useState([...data]);

    const handleSort = (sortBy) => {
        let sortedDataCopy = [...sortedData];

        if (sortBy === 'price') {
            sortedDataCopy.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'name') {
            sortedDataCopy.sort((a, b) => a.keyword.localeCompare(b.keyword));
        }

        setSortedData(sortedDataCopy);
    };

    const handleFilter = (filterBy) => {
        const filteredData = data.filter((item) => item.category === filterBy);
        setSortedData(filteredData);
    };

    useEffect(() => {
        const filteredData = data.filter((item) =>
            item.keyword.toLowerCase().includes(searchText.toLowerCase())
        );
        setSortedData(filteredData);
    }, [searchText, data]);

    return (
        <div>
            <select onChange={(e) => handleSort(e.target.value)}>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
            </select>
            <button onClick={() => handleFilter('category1')}>Filter Category 1</button>
            <button onClick={() => handleFilter('category2')}>Filter Category 2</button>

            {sortedData.map((item) => (
                <div key={item.id}>
                    <h3>{item.keyword}</h3>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                </div>
            ))}
        </div>
    );
};
