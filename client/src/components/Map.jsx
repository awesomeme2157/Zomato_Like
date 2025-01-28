// // eslint-disable-next-line
// import React from "react";
// import PropTypes from "prop-types";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const Map = ({ latitude, longitude, address }) => {
//   return (
//     <MapContainer
//       center={[latitude, longitude]}
//       zoom={13}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={[latitude, longitude]}>
//         <Popup>{address}</Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// Map.propTypes = {
//   latitude: PropTypes.number.isRequired,
//   longitude: PropTypes.number.isRequired,
//   address: PropTypes.string.isRequired,
// };

// export default Map;

// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ latitude, longitude, address }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};

export default Map;
