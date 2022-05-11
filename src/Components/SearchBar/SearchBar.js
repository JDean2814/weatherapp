import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [state, setState] = useState('');
    
    function search(state) {
        props.onSearch(state);
    }

    function handleKeyPress(event) {
        if(event.key === 'Enter') {
            search(state);
        }
    }

    return (
        <div>
            <input placeholder='Enter a city name' onChange={event => setState(event.target.value)} onKeyUp={handleKeyPress}></input>
            <button onClick={() => {search(state)}}>Search</button>
        </div>
    )
}

export default SearchBar;