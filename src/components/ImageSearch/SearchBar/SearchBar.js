import React, { useState, useEffect, useContext } from 'react';
import './SearchBar.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PhotoContext } from '../../../context/PhotoContext';

const SearchBar = () => {
    
    const [ term, setTerm ] = useState('');

    const { onSearchSubmit } = useContext(PhotoContext);

    useEffect(() => {
        onSearchSubmit('cameras');
        setTerm('');
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
        setTerm('');
    }

    return ( 
        <div className="searchBarDiv">
            <form onSubmit={onFormSubmit} >
                <InputGroup variant="searchBar">
                    <InputGroup.Prepend>
                        <Button variant="search" onClick={onFormSubmit}>
                            <FontAwesomeIcon id="basic-addon1" icon={faSearch} />
                        </Button>
                    </InputGroup.Prepend>
                        <input type="text"
                            value={term}
                            onChange={(e) => setTerm( e.target.value )}
                            placeholder= "Search for high-resolution photos"
                            className="searchBar"
                        />
                </InputGroup>
            </form>
        </div>
     );
}
 
export default SearchBar;