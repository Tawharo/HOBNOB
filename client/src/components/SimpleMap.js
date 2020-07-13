import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
  const [center] = useState({ lat: 37.6118454, lng: -77.47254939999999 });
  const [zoom] = useState(11);
  return (
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCa4dyWpTiZ4vim1pA_kesR6mQn--gtInE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={37.6118454}
          lng={-77.47254939999999}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
