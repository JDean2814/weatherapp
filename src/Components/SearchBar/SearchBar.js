import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [state, setState] = useState('');
    
    function search(state) {
        props.onSearch(state);
        setState('');
    }

    function handleKeyPress(event) {
        if(event.key === 'Enter') {
            search(state);
        }
    }

    return (
        <div>
            <input placeholder='Enter a city name..' onChange={event => setState(event.target.value)} onKeyUp={handleKeyPress} value={state}></input>
            <button onClick={() => {search(state);
                                    setState('');}}>Search</button>
        </div>
    )
}

export default SearchBar;