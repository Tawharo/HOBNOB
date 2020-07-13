<<<<<<< HEAD
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
=======
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
>>>>>>> 4278b899939e848d58d009ecf25c14157c3f0a8d


const SimpleMap = (props) => {
<<<<<<< HEAD
    const [center, setCenter] = useState({lat: 37.6118454, lng: -77.47254939999999 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCa4dyWpTiZ4vim1pA_kesR6mQn--gtInE' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={37.6118454}
            lng={-77.47254939999999}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}
=======
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
>>>>>>> 4278b899939e848d58d009ecf25c14157c3f0a8d

export default SimpleMap;
