import React from "react";
import GoogleMapReact from 'google-map-react';
import marker from '../../../public/images/svg/marker.svg'

const API_GOOGLE_MAP = import.meta.env.VITE_API_GOOGLE_MAP;

const AnyReactComponent = ({ text }) => (

  <div
  style={{
    width: '60px',
    height: '60px',
    // color: 'white',
    // background: '#4E76C6',
    // padding: '15px 10px',
    display: 'inline-flex',
    // textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: '100%',
    transform: 'translate(-50%, -100%)'
  }}
  >
    {/* {text} */}
    {<img src={marker} />}
  </div>
)

export const Map = () => {

  const defaultProps = {
    center: {
      lat: 50.44992586728134,
      lng: 30.470730868284054
    },
    zoom: 11
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_GOOGLE_MAP }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={50.44992586728134}
        lng={30.470730868284054}
        // text="MOLLEN"
      />
    </GoogleMapReact>
  );
};
