

"use client";
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from'./page1.module.css';
import Link from 'next/link';

export default function Inv() {
 
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await fetch('invcard.json');
        const jsonData = await response.json();
        setData(jsonData); 
      } catch (error) {
        console.error('Error fetching ', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData(); 
  }, []);


  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/atlah.css" rel="stylesheet" />

      <div id="main" className="container">
        <div id="high" className="text-center mb-4">
          <h1 id="ser">Invitation Cards</h1>
          <div className="container-fluid">
            <form className="d-flex mb-3" onSubmit={e => e.preventDefault()}>
              <input
                id="searchInput"
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} 
              />
            
            </form>
          </div>
        </div>

        <div id="contener">
          <div id="cards">
            {loading ? <LoadingIndicator /> : (
              <div className="row row-cols-1 row-cols-md-3 g-4" id="row">
                {filteredData.map((item, index) => (
                  <div className="col" key={index}>
                    <div className="card invcr">
                      <img id="invc" src={item.card} className="card-img-top" alt={item.name} />
                      <div className="card-body">
                        <h3 className="card-title invn">{item.name}</h3>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="btn " id="edit">Edit</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
 
      <Script src="/js/bootstrap.js" />
    </div>
  );
}

const LoadingIndicator = () => {
  return (
    <div className={styles.load}>
      <h2>Loading...</h2>
    </div>
  );
};


