"use client";
import "./page.scss";
import { useEffect, useState } from "react";
import Filter from "../../../components/filter/filter"
import Card from "../../../components/card/card"
import Map from "../../../components/map/map";
import '../layout.scss';

function ListPage() {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    city: "",
    indoorOutdoor: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    capacity: "",
  });

  useEffect(() => {
    //fetch data from backend as this use get api and put in res
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/api/venue/list');
      //change to json
      const venues = await res.json();
      //put in data that list of venues as json
      setData(venues);
    };
    fetchData();
  }, []);

  //take the values that choosen in filter by user
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //fetch the data in json and take the value choosen by user in filters and get the included correspond in json data
  const filteredData = data.filter((item) => {
    return (
      (filters.city ? item.location.toLowerCase().includes(filters.city.toLowerCase()) : true) &&
      (filters.indoorOutdoor ? item.indoorOutdoor.toLowerCase() === filters.indoorOutdoor : true) &&
      (filters.type ? item.venueType.toLowerCase() === filters.type : true) &&
      (filters.minPrice ? item.priceVenue >= filters.minPrice : true) &&
      (filters.maxPrice ? item.priceVenue <= filters.maxPrice : true) &&
      (filters.capacity ? item.capacity >= filters.capacity : true)
    );
  });
  //will loop through filterd data and put it in cards
  return (
    <div className="layout">
      <div className="content">
        <div className="listPage">
          <div className="listContainer">
            <div className="wrapper">

              <Filter filters={filters} onFilterChange={handleFilterChange} />
              {filteredData.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="mapContainer">
            <Map items={data} />
          </div>
        </div>
      </div>
    </div>);
}

export default ListPage;