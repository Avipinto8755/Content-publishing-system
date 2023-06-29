import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ apiKey, address }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const [mapCenter, setMapCenter] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setMapCenter({ lat, lng });
        } else {
          console.log("Error: Unable to retrieve location data.");
        }
      } catch (error) {
        console.log("Error: Failed to fetch location data.", error);
      }
    };

    fetchLocation();
  }, [apiKey, address]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={14}
      >
        {mapCenter && <Marker position={mapCenter} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
