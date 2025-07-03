// src/components/Card/Card.jsx
import Link from 'next/link';
import './card.scss';


function Card({ item }) {
    return (
       
            <div className="card">
                <Link href={`/venue/${item.id}`} className="imageContainer">
                    <img src={item.image} alt={item.name} />
                </Link>
                <div className="textContainer">
                    <h2 className="name">
                        <Link href={`/venue/${item.id}`}>{item.name}</Link>
                    </h2>
                    <p className="address">
                        <img src="/pin.png" alt="" />
                        <span>{item.location}</span>
                    </p>
                    <p className="price">$ {item.priceVenue}</p>
                    <div className="bottom">
                        <div className="features">
                            <div className="feature">
                                <img src="/park.png" alt="" />
                                <span>{item.indoorOutdoor}</span>
                            </div>
                            <div className="feature">
                                <img src="/people.png" alt="" />
                                <span>Up to {item.capacity} guests</span>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icon">
                                <img src="/starpng.png" alt="" />
                                <span>{item.rate}</span>
                            </div>
                            <div className="icon">
                                <img src="/ctpng.png" alt="" />
                                <span>{item.cateringIncluded ? "Yes" : "No"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Card;