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
      const womanData = result.filter((item) => item.type === "woman");
      setData(womanData); // Store the fetched data
      setFilteredData(womanData); // Initially set the filtered data as the full data
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
    return filteredData.map((woman) => (
      <div className="col" key={woman.ID}>
        <div className="card" data-id={woman.ID}>
          <img src={woman.img} className="card-img-top" alt={woman.name} />
          <div className="card-body">
            <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <h5 className="card-title">{woman.name}</h5>
            <h5 className="card-text">
              <img
                id="loca"
                src="/img/icon/location.png"
                alt="Location"
              />{" "}
              {woman.location}
            </h5>
            <div id="contact">
              <a  id="inst" href={`tel:${woman.phone}`}>
                <img
                  id="aicon"
                  src="/img/icon/phone-call_455705.png"
                  alt="Phone"
                />
                Phone
              </a>
              <a id="inst" href={woman.inst}>
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
              onClick={() => navigateToDetails(woman.ID)}
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

