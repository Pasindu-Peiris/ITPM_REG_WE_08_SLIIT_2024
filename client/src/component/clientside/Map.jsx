
















import React from 'react'
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';


import LocIcon from '../../Images/map-location.png'
import loc1 from '../../Images/gps-tracker.gif'

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const lan = 6.7057
const land1 = {
  lat:lan , lng: 80.3847
}

const markers = [
  {
    id: 1,
    name: "new twon",
    position: land1
  },
  {
    id: 2,
    name: "sivali",
    position: {lat:6.8486 , lng:80.2600},
  },
  {
    id:3,
    name:"kuruwita",
    position:{lat:6.8218, lng:80.3615}
  }

]

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `AIzaSyBrAJXUQ_Z-q2l3X-yhLNvOfVB0KS7bqSU`
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={
        center
      }
      zoom={100}

      onLoad={onLoad}
      onUnmount={onUnmount}
    >
     
      {
        markers.map(({id, name, position}) => (
          <MarkerF key={id} position={position} icon={{
            url :`${LocIcon}`,
            scaledSize:{width:50, height:50},
            
          }} onClick={() =>  console.log(`${name}`)}></MarkerF>
        ))
      }
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)