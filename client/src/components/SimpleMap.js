import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const SimpleMap = (props) => {
  const [center, setCenter] = useState({
    lat: 37.6118454,
    lng: -77.47254939999999,
  });
  const [zoom, setZoom] = useState(11);
  return (
    <div
      style={{
        height: "50vh",
        width: "90%",
        margin: "0 auto",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCa4dyWpTiZ4vim1pA_kesR6mQn--gtInE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={37.6118454}
          lng={-77.47254939999999}
          name="Hobnob"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
