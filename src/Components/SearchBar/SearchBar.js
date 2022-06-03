import React, { useState } from 'react';
import ErrModal from '../ErrModal/ErrModal';
import './SearchBar.css';

function SearchBar(props) {
    const [state, setState] = useState('');
    
//Using the search function passed down from the parent App component to get the user input
    function search(state) {
        let arr = state.split(', ');
        props.onSearch(arr);
        setState('');
    }

//Applying the use of the enter key for a search
    function handleKeyPress(event) {
        if(event.key === 'Enter') {
            search(state);
        }
    }

    return (
        <div className='Search'>
            <input placeholder='Ex. [New York, NY]' onChange={event => setState(event.target.value)} onKeyUp={handleKeyPress} value={state}></input>
            <button onClick={() => {search(state);
                                    setState('');}}>Search</button>
            {(props.ifError) ? (<ErrModal hideModal={props.hideModal} />) : ('')}
        </div>
    )
}

export default SearchBar;