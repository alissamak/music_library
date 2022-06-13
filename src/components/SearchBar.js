import GalleryItem from './GalleryItem';
import {useContext, useState} from 'react'
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
    const {term, handleSearch} = useContext(SearchContext);

    return(
        <div>
            <form>
                <input ref={term} type='text' placeholder='Enter a search term here'></input>
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;