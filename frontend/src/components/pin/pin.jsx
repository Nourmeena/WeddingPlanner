// src/components/Pin/Pin.jsx
import { Marker, Popup } from "react-leaflet";
import './pin.scss';
import L from 'leaflet';
import Link from 'next/link';

function Pin({ item }) {
    const customIcon = new L.Icon({
        iconUrl: '/pin.png',
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
    });
    return (

        <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.image} alt={item.name} />
                    <div className="textContainer">
                        <Link href={`/venue/${item.id}`}>{item.name}</Link>
                        <span>Capacity: {item.capacity}</span>
                        <b>$ {item.priceVenue}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;