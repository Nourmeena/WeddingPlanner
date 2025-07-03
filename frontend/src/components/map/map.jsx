"use client";
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/pin';

function Map({ items }) {
  // Determine if items is an array or a single object
  const isArray = Array.isArray(items);
  const venueData = isArray ? items : [items]; // Convert to array if single object

  // Center the map based on the first venue's coordinates if available
  const center = isArray && venueData.length > 0
    ? [venueData[0].latitude, venueData[0].longitude]
    : [26.8206, 30.8025]; // Default to Egypt's center

  return (
    <MapContainer center={center} zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {venueData.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;