import React, { useState } from 'react'
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import LocIcon from '../../Images/map-location.png'

const LocMap = () => {

    const [name, setName] = useState('');

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `AIzaSyBrAJXUQ_Z-q2l3X-yhLNvOfVB0KS7bqSU`
    })

    const markers = [
        
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


    return (
        <div className=' w-[100%] h-[90vh] flex justify-center items-center'>
            {isLoaded ?<GoogleMap
                mapContainerStyle={ {width:"100%", height:"90vh"}}
                center={
                    {lat:6.8486, lng:80.2600}
                }
                zoom={10}

               
            >

                {markers.map(({ id, name, position }) => (
                        <MarkerF key={id} position={position} icon={{
                            

                        }} onClick={() => console.log(`${name}`)}></MarkerF>
                    ))
                    
                }
            </GoogleMap> :null

            }
        </div>
    )
}

export default LocMap