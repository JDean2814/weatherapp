import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [state, setState] = useState('');
    
    function search(state) {
        props.onSearch(state);
    }

    return (
        <div>
            <input placeholder='Enter a city name' onChange={event => setState(event.target.value)}></input>
            <button onClick={() => {search(state)}}>Search</button>
        </div>
    )
}

export default SearchBar;