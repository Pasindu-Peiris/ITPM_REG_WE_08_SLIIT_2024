import React, { useState } from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import LocIcon from '../../Images/loc.png'
import bot from '../../Images/chatbot.png'
import doc from '../../Images/document.png'

const LocMap = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `AIzaSyBrAJXUQ_Z-q2l3X-yhLNvOfVB0KS7bqSU`
    })

    const style = {
        section: {
            position: "absolute",
            top: "20px",
            width: "450px",
            height: "580px",
            overflow: "hidden",
            zIndex: "1"
        },
        section2: {

            position: "absolute",
            width: "80px",
            display:"block",
            alineItem:"center",
            height: "200px",
            backgroundColor:"red",
            bottom:"25px",
            left:"2px",
            zIndex: "1",
            alignItems: "center"

        },
        section3 :{
            padding:"5px",
            borderRadius:"20%",
        },
        section4:{
            marginBottom:"12px"
        }


    }




    const markers = [
        {
            id: 1,
            name: "eheliaygoda",
            position: { lat: 6.7056, lng: 80.3847 },
            des: "This is a sample description Loradfdb dbfbddgbddvdagvdvfgrgbgfdgbfffbfbfffbfdbfggbsgbfbbfbgdfbdfgbdfb"
        },
        {
            id: 2,
            name: "sivali",
            position: { lat: 6.8486, lng: 80.2600 },
            des: "This is a sample description Loradfdb dbfbddgbddvdagvdvfgrgbgfdgbfffbfbfffbfdbfggbsgbfbbfbgdfbdfgbdfb",
        },
        {
            id: 3,
            name: "kuruwita",
            position: { lat: 6.8218, lng: 80.3615 },
            des: "This is a sample description Loradfdb dbfbddgbddvdagvdvfgrgbgfdgbfffbfbfffbfdbfggbsgbfbbfbgdfbdfgbdfb"
        },
        {
            id: 4,
            name: "homagama",
            position: { lat: 6.8433, lng: 80.0032 },
            des: "This is a sample description Loradfdb dbfbddgbddvdagvdvfgrgbgfdgbfffbfbfffbfdbfggbsgbfbbfbgdfbdfgbdfb"
        },
        {
            id: 5,
            name: "horana",
            position: { lat: 6.7230, lng: 80.0647 },
            des: "This is a sample description Loradfdb dbfbddgbddvdagvdvfgrgbgfdgbfffbfbfffbfdbfggbsgbfbbfbgdfbdfgbdfb"
        },
        {
            id: 6,
            name: "Nivithigala",
            position: { lat: 6.5959, lng: 80.4578 },
            des: "This is a sample description Loradfdb dbfbddgbddvdagvdvfgrgbgfdgbfffbfbfffbfdbfggbsgbfbbfbgdfbdfgbdfb"
        }

    ]

    const displayOut = (id) => {
        if (id === actvemark) {
            return;
        }
        setactvemark(id);

    }


    const handleClick = () => {
        document.getElementById('boxBot').style.display = "none"
        document.getElementById('boxbotHead').style.display = "none"

    }

    const [actvemark, setactvemark] = useState(null);


    return (
        <div className=' w-[100%] h-[100vh] flex justify-center items-center'>
            {isLoaded ? <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100vh" }}
                center={
                    { lat: 6.8486, lng: 80.2600 }
                }
                zoom={10}


            >

                {markers.map(({ id, name, position, des }) => (
                    <MarkerF key={id} position={position} icon={{
                        url: `${LocIcon}`,
                        scaledSize: { width: 50, height: 50 },


                    }} onClick={() => displayOut(id)} >
                        {
                            actvemark === id ? <InfoWindowF onCloseClick={() => setactvemark(null)}>
                                <div style={{ backgroundColor: 'white', borderRadius: 'none' }}>


                                    <div class="card" style={{ width: "22rem" }}>

                                        <div class="card-body">
                                            <h1 className='bold'>{name}</h1>
                                            <p class="card-text fs-3 font-bold">{des}</p>
                                        </div>
                                    </div>

                                </div>

                            </InfoWindowF> : null
                        }
                    </MarkerF>
                ))

                }
            </GoogleMap> : null

            }
            <div className='' style={style.section} id='boxbotHead' >
                <iframe id='boxBot'
                    src="https://www.chatbase.co/chatbot-iframe/ZPDiUfqgdQ8IgqBz4c63i"
                    title="Pasindu"
                    width=""
                    style={{ width: "450px", height: "600px", position: "absolute", borderRadius: "12px" }}
                    frameborder="0"
                ></iframe>


            </div>

            <div style={style.section2}>
            <button onClick={handleClick}  style={style.section3 } className='shake mb-6'><img src={bot} alt="" width={100} /></button>
            <button onClick={handleClick}  style={style.section3 }  className=' shake mt-1'><img src={doc} alt="" width={70} /></button>
            </div>

            
        </div>
    )
}

export default LocMap