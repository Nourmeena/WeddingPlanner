"use client";
import { useState } from 'react';
import './searchBar.scss';

function SearchBar() {
    const [query, setQuery] = useState({
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    return (
        <div className='searchBar'>
            <form>
                <input
                    type="text"
                    name="location"
                    placeholder="City Location"
                    value={query.location}
                    onChange={(e) => setQuery({ ...query, location: e.target.value })}
                />
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000}
                    placeholder="Min Price"
                    value={query.minPrice}
                    onChange={(e) => setQuery({ ...query, minPrice: e.target.value })}
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="Max Price"
                    value={query.maxPrice}
                    onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
                />
                <button type="submit">
                    <img src="/search.png" alt="Search" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;