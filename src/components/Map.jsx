import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/css/ContactDetails.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Custom marker icon for office location
const officeIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Set office location coordinates (example: New York City)
const officePosition = [40.7128, -74.0060]; // Replace with your office latitude and longitude

function MapComponent() {
  return (
    <div className='map'>
      <MapContainer center={officePosition} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={officePosition} icon={officeIcon}>
          <Popup>
            <b>Your Office</b><br />123 Main St, Your City, Your Country
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
