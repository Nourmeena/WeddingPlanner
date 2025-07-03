import './filter.scss';

function Filter({ filters, onFilterChange }) {
    return (
        <div className="filter">
            <h1>
                Search results for <b>Egypt</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City Location"
                        value={filters.city}
                        onChange={onFilterChange}
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="io">Indoor/Outdoor</label>
                    <select name="indoorOutdoor" id="io" value={filters.indoorOutdoor} onChange={onFilterChange}>
                        <option value="">Any</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="type">Venue Type</label>
                    <select name="type" id="type" value={filters.type} onChange={onFilterChange}>
                        <option value="">Any</option>
                        <option value="garden">Garden</option>
                        <option value="hall">Hall</option>
                        <option value="barn">Barn</option>
                        <option value="rooftop">Rooftop</option>
                        <option value="gallery">Gallery</option>
                        <option value="ballroom">Ballroom</option>
                        <option value="terrace">Terrace</option>
                        <option value="castle">Castle</option>
                        <option value="resort">Resort</option>
                        <option value="pavilion">Pavilion</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                        value={filters.minPrice}
                        onChange={onFilterChange}
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                        value={filters.maxPrice}
                        onChange={onFilterChange}
                    />
                </div>
                <div className="item">
                    <label htmlFor="capacity">Capacity</label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        placeholder="any"
                        value={filters.capacity}
                        onChange={onFilterChange}
                    />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    );
}

export default Filter;