import React, { useState } from 'react';
import ErrModal from '../ErrModal/ErrModal';
import './SearchBar.css';

function SearchBar(props) {
    const [state, setState] = useState('');
    
    function search(state) {
        let arr = state.split(', ');
        props.onSearch(arr);
        setState('');
    }

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