"use client";
import "./page.scss";
import Slider from "../../../components/slider/slider";
import Map from "../../../components/map/map";
import { useEffect, useState } from "react";
import '../layout.scss';

function SinglePage({ params }) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:4000/api/venue/${params.id}`); 
      if (!res.ok) {
        throw new Error('Network response was not ok'); 
      }
      const venueData = await res.json();
      setData(venueData);
    } catch (error) {
      console.error('Error fetching venue data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data ? (
      <div className="layout">
        <div className="singlePage">
          <div className="details">
            <div className="wrapper">
              <Slider images={data.images} />
              <div className="info">
                <div className="top">
                  <div className="post">
                    <h1>{data.name}</h1>
                    <div className="address">
                      <img src="/pin.png" alt="" />
                      <span>{data.location}</span>
                    </div>
                    <div className="price">Up to {data.capacity} guests</div>
                  </div>
                  <div className="user">
                    <img src={data.image} alt="" />
                    <span>{data.name}</span>
                  </div>
                </div>
                <div className="bottom">{data.description}</div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="wrapper">
              <p className="title">General</p>
              <div className="listVertical">
                <div className="feature">
                  <img src="/ava.png" alt="" />
                  <div className="featureText">
                    <span>Availability</span>
                    <p>{data.availability ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/starpng.png" alt="" />
                  <div className="featureText">
                    <span>Rate</span>
                    <p>{data.rate}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/fee.png" alt="" />
                  <div className="featureText">
                    <span>Contact</span>
                    <p>{data.contact}</p>
                  </div>
                </div>
              </div>
              <p className="title">Prices</p>
              <div className="sizes">
                <div className="size">
                  <img src="/size.png" alt="" />
                  <span>Venue {data.priceVenue} $</span>
                </div>
                <div className="size">
                  <img src="/restaurant.png" alt="" />
                  <span>Bar Services {data.priceBar} $</span>
                </div>
                <div className="size">
                  <img src="/cere.png" alt="" />
                  <span>Ceremony {data.priceCeremony} $</span>
                </div>
              </div>
              <p className="title">Services</p>
              <div className="listHorizontal">
                <div className="feature">
                  <img src="/ctpng.png" alt="" />
                  <div className="featureText">
                    <span>Catering</span>
                    <p>{data.cateringIncluded ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/pet.png" alt="" />
                  <div className="featureText">
                    <span>Clean Up</span>
                    <p>{data.cleanUpIncluded ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/bed.png" alt="" />
                  <div className="featureText">
                    <span>Additional rooms</span>
                    <p>{data.roomsIncluded ? "Yes" : "No"}</p>
                  </div>
                </div>
              </div>
              <p className="title">Location</p>
              <div className="mapContainer">
                <Map items={data} />
              </div>
              <div className="buttons">
                <button>
                  <img src="/chat.png" alt="" />
                  Send a Message
                </button>
                <button>
                  <img src="/save.png" alt="" />
                  Save the Place
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : <div></div>
  );
};



export default SinglePage;