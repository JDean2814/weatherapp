import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <input placeholder='Enter a city name'></input>
            <button>Search</button>
        </div>
    )
}

export default SearchBar;