"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Page1() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("data.json");
      const result = await response.json();
      const manData = result.filter((item) => item.type === "man");
      setData(manData); // Store the fetched data
      setFilteredData(manData); // Initially set the filtered data as the full data
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered); // Update the filtered data based on search input
  };

  // Navigate to details page
  const navigateToDetails = (id) => {
    localStorage.setItem("SelectedAtelierId", id);
    window.location.href = "/Atlahd"; // Redirect to details page
  };

  // Render the data dynamically
  const renderCards = () => {
    return filteredData.map((man) => (
      <div className="col" key={man.ID}>
        <div className="card" data-id={man.ID}>
          <img src={man.img} className="card-img-top" alt={man.name} />
          <div className="card-body">
            <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <h5 className="card-title">{man.name}</h5>
            <h5 className="card-text">
              <img
                id="loca"
                src="/img/icon/location.png"
                alt="Location"
              />{" "}
              {man.location}
            </h5>
            <div id="contact">
              <a  id="inst" href={`tel:${man.phone}`}>
                <img
                  id="aicon"
                  src="/img/icon/phone-call_455705.png"
                  alt="Phone"
                />
                Phone
              </a>
              <a id="inst" href={man.inst}>
                <img
                  id="aicon"
                  src="/img/icon/instagram_3991634.png"
                  alt="Instagram"
                />
                Instagram
              </a>
            </div>
            <button
              className="btn"
              onClick={() => navigateToDetails(man.ID)}
              id="more"
            >
              See more ...
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div id="main">
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/atlah.css" rel="stylesheet" />

      <div id="high">
        <h1 id="ser">Ateliers</h1>
        <div className="container-fluid">
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              id="searchInput"
              className="form-control me-2"
              type="search"
              placeholder="Atelier Name"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <div id="contener">
        <div id="cards">
          <div className="row row-cols-1 row-cols-md-3 g-4" id="row">
            {renderCards()}
          </div>
        </div>
      </div>

      <Script src="/js/bootstrap.js" />
      
    </div>
  );
}
