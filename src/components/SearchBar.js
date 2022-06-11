import GalleryItem from './GalleryItem';
import {useState} from 'react'

const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('');

    return(
        <div>
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                {/* searchs by submit button */}
                {/* <input type='text' placeholder='Enter a search term here' onChange={(e) => setSearchTerm(e.target.value)}></input> */}
                {/* searchs by typing/live search */}
                <input type='text' placeholder='Enter a search term here' onChange={(e) => props.handleSearch(e, e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SearchBar;