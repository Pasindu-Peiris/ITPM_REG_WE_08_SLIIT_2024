import React, { useState } from 'react'
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import LocIcon from '../../Images/loc.png'

const LocMap = () => {

    const [name, setName] = useState('');

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `AIzaSyBrAJXUQ_Z-q2l3X-yhLNvOfVB0KS7bqSU`
    })

    const markers = [
        {
            id: 1,
            name: "eheliaygoda",
            position: { lat: 6.7056, lng: 80.3847 }
        },
        {
            id: 2,
            name: "sivali",
            position: { lat: 6.8486, lng: 80.2600 },
        },
        {
            id: 3,
            name: "kuruwita",
            position: { lat: 6.8218, lng: 80.3615 }
        },
        {
            id: 4,
            name: "homagama",
            position: { lat: 6.8433, lng: 80.0032 }
        },
        {
            id: 5,
            name: "horana",
            position: { lat: 6.7230, lng: 80.0647 }
        },
        {
            id: 6,
            name: "Nivithigala",
            position: { lat: 6.5959, lng: 80.4578 }
        }

    ]


    return (
        <div className=' w-[100%] h-[90vh] flex justify-center items-center'>
            {isLoaded ? <GoogleMap
                mapContainerStyle={{ width: "100%", height: "90vh" }}
                center={
                    { lat: 6.8486, lng: 80.2600 }
                }
                zoom={10}


            >

                {markers.map(({ id, name, position }) => (
                    <MarkerF key={id} position={position} icon={{
                        url: `${LocIcon}`,
                        scaledSize: { width: 50, height: 50 },

                    }} onClick={() => console.log(`${name}`)}></MarkerF>
                ))

                }
            </GoogleMap> : null

            }
        </div>
    )
}

export default LocMap