import React, {useState} from 'react';
import  './SearchBar.css';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return(
        <div className="searchForm">
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" 
                            placeholder="Search videos"
                            value={term}
                            onChange={onInputChange}
                            className="search__input"
                    />
                    <button type="submit" className="search__btn">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;