import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import LocIcon from '../../Images/loc.png'
import bot from '../../Images/chatbot.png'
import doc from '../../Images/document.png'
import mic from '../../Images/send-message.png'
import mic2 from '../../Images/microphone.png'
import "../CSS/style.css"
import axios from "axios"
import Joyride, { STATUS } from 'react-joyride';

const LocMap = () => {


    const [{ run, steps }, setState] = useState({
        run: true,
        steps:
            [
                {

                    content: <h2 className='text-2xl'> Let's begin Tour 🛩️ </h2>,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'center',
                    target: "body"

                },
                {

                    content: <h2 className='text-xl'>Explore travel with Ai Assistant 👾</h2>
                    ,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'bottom',
                    target: "#bot",
                    title: "First Step"

                },
                {

                    content: <h2 className='text-xl'>Explore travel with the document 📂</h2>,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'bottom',
                    target: "#step1",
                    title: "Second Step"

                },   
                {

                    content: <h2 className='text-xl'>Explore the location , Drag the map man into the flag icon 🗺️ </h2>,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'center',
                    target: "#map1",
                    title: "Thired Step"

                }
            ]

    })


    const [listPoints, setListPoints] = useState([]);

    const { id } = useParams();

    const [p1, setp1] = useState([4]);
    const [p2, setp2] = useState([4]);
    const [p3, setp3] = useState([4]);
    const [p4, setp4] = useState([4]);
    const [p5, setp5] = useState([4]);
    const [p6, setp6] = useState([4]);
    const [p7, setp7] = useState([4]);
    const [p8, setp8] = useState([4]);





    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get("http://localhost:8090/dest/getdest/" + id);

            setListPoints(response.data)
            setp1(response.data.points1)
            setp2(response.data.points2)
            setp3(response.data.points3)
            setp4(response.data.points4)
            setp5(response.data.points5)
            setp6(response.data.points6)
            setp7(response.data.points7)
            setp8(response.data.points8)

        }

        fetchData();
    }, []); // Empty array means this effect runs once on mount and not on updates





    const style = {
        section: {
            position: "absolute",
            top: "60px",
            left: '120px',
            width: "400px",
            height: "570px",
            overflow: "hidden",
            zIndex: "1",
            display: "none",


        },
        section2: {

            position: "absolute",
            width: "80px",
            display: "block",
            alineItem: "center",
            height: "300px",
            backgroundColor: "",
            bottom: "25px",
            left: "20px",
            zIndex: "1",
            alignItems: "center"

        },
        section3: {
            padding: "5px",
            borderRadius: "20%",
        },
        section4: {
            marginBottom: "12px"

        }


    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `AIzaSyBrAJXUQ_Z-q2l3X-yhLNvOfVB0KS7bqSU`
    })

    const la1 = parseFloat(p1[1]);
    const ln1 = parseFloat(p1[2]);

    const markers = [

        {
            id: 1,
            name: p1[0],
            position: { lat: la1, lng: ln1 },
            des: p1[3]
        },
        {
            id: 2,
            name: p2[0],
            position: { lat: parseFloat(p1[1]), lng: parseFloat(p2[2]) },
            des: p2[3]
        },
        {
            id: 3,
            name: p3[0],
            position: { lat: parseFloat(p3[1]), lng: parseFloat(p3[2]) },
            des: p3[3]
        },
        {
            id: 4,
            name: p4[0],
            position: { lat: parseFloat(p4[1]), lng: parseFloat(p4[2]) },
            des: p4[3]
        },
        {
            id: 5,
            name: p5[0],
            position: { lat: parseFloat(p5[1]), lng: parseFloat(p5[2]) },
            des: p5[3]
        },
        {
            id: 6,
            name: p6[0],
            position: { lat: parseFloat(p6[1]), lng: parseFloat(p6[2]) },
            des: p6[3]
        },
        {
            id: 7,
            name: p7[0],
            position: { lat: parseFloat(p7[1]), lng: parseFloat(p7[2]) },
            des: p7[3]
        },
        {
            id: 8,
            name: p8[0],
            position: { lat: parseFloat(p8[1]), lng: parseFloat(p8[2]) },
            des: p8[3]
        }
    ];

    const displayOut = (id) => {
        if (id === actvemark) {
            return;
        }
        setactvemark(id);

    }




    const handleClick = () => {

        // var bot = document.getElementById('bot');

        var a = document.getElementById('boxBot')
        var b = document.getElementById('boxbotHead')

        if (a.style.display === "block") {
            // Close the bot
            a.style.display = "none";
            b.style.display = "none";
        } else {
            // Open the bot
            a.style.display = "block";
            b.style.display = "block";
        }

    }

    const [actvemark, setactvemark] = useState(null);


    //add chatbot

    const [inputInitHeight, setHeight] = useState('45')

    useEffect(() => {



        // const chatbotToggler = document.querySelector(".chatbot-toggler");
        // const closeBtn = document.querySelector(".close-btn");
        const chatbox = document.querySelector(".chatbox");
        const chatInput = document.querySelector(".chat-input textarea");
        const sendChatBtn = document.querySelector(".chat-input span");

        let userMessage = null; // Variable to store user's message
        const API_KEY = "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"; // Paste your API key here
        setHeight(chatInput.scrollHeight);

        const createChatLi = (message, className) => {
            // Create a chat <li> element with passed message and className
            const chatLi = document.createElement("li");
            chatLi.classList.add("chat", `${className}`);
            let chatContent = className === "outgoing" ? `<p></p>` : `<p></p>`;
            chatLi.innerHTML = chatContent;
            chatLi.querySelector("p").textContent = message;
            return chatLi; // return chat <li> element
        }

        const generateResponse = (chatElement) => {
            const API_URL = "https://api.openai.com/v1/chat/completions";
            const messageElement = chatElement.querySelector("p");

            // Define the properties and message for the API request
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: userMessage }],
                })
            }

            // Send POST request to API, get response and set the reponse as paragraph text
            fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
                messageElement.textContent = data.choices[0].message.content.trim();
            }).catch(() => {
                messageElement.classList.add("error");
                messageElement.textContent = "Oops! Something went wrong. Please try again.";
            }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
        }

        const handleChat = () => {
            userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
            if (!userMessage) return;

            // Clear the input textarea and set its height to default
            chatInput.value = "";
            chatInput.style.height = `${inputInitHeight}px`;

            // Append the user's message to the chatbox
            chatbox.appendChild(createChatLi(userMessage, "outgoing"));
            chatbox.scrollTo(0, chatbox.scrollHeight);

            setTimeout(() => {
                // Display "Thinking..." message while waiting for the response
                const incomingChatLi = createChatLi("Thinking...", "incoming");
                chatbox.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);
                generateResponse(incomingChatLi);
            }, 600);
        }

        chatInput.addEventListener("input", () => {
            // Adjust the height of the input textarea based on its content
            chatInput.style.height = `${inputInitHeight}px`;
            chatInput.style.height = `${chatInput.scrollHeight}px`;
        });

        chatInput.addEventListener("keydown", (e) => {
            // If Enter key is pressed without Shift key and the window 
            // width is greater than 800px, handle the chat
            if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
                e.preventDefault();
                handleChat();
            }
        });

        sendChatBtn.addEventListener("click", handleChat);
        // closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
        // chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));








    }, []);












    return (

        <div className=' w-[100%] h-[100vh] flex justify-center items-center overflow-hidden'>
            

        
            <Joyride
                continuous
                callback={() => { }}
                run={run}
                steps={steps}
                hideCloseButton
                scrollToFirstStep
                showSkipButton
                showProgress />




            {isLoaded ? <GoogleMap id="map1"
                mapContainerStyle={{ width: "100%", height: "100vh" }}
                center={
                    { lat: 6.7184, lng: 80.7741 }
                }
                zoom={10}


            >

                {markers.map(({ id, name, position, des }) => (
                    <MarkerF id="mark1" key={id} position={position} icon={{
                        url: `${LocIcon}`,
                        scaledSize: { width: 50, height: 50 },


                    }} onClick={() => displayOut(id)} >
                        {
                            actvemark === id ? <InfoWindowF onCloseClick={() => setactvemark(null)}>
                                <div style={{ backgroundColor: 'white', borderRadius: 'none' }}>


                                    <div class="card" style={{ width: "22rem" }}>

                                        <div class="card-body">
                                            <h1 className='card-text fs-4 font-bold text-amber-500'>{name}</h1>
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


            {/* <iframe id='boxBot'
                    src="https://www.chatbase.co/chatbot-iframe/ZPDiUfqgdQ8IgqBz4c63i"
                    title="CAMPER"
                    width="100%"
                    style={{ width: "400px", height: "600px", position: "absolute", borderRadius: "12px", display: "none" }}

                    frameborder="0"
                ></iframe> */}



            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ backgroundColor: "#0b0b0b58" }}>
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header" style={{ backgroundColor: "#ffd54c", textAlign: "center", justifyContent: "space-between", display: "flex" }}>
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">ChatBot</h1>
                            <button type="button" class=" bg-black p-2 text-blue-500 rounded" data-bs-dismiss="modal" aria-label="Close" style={{ color: "white" }}>Close</button>
                        </div>
                        <div class="modal-body bg-white">

                            <div className="box-wrp bg-white">

                                <div class="chatbot bg-white">


                                    <ul class="chatbox ">
                                        <li class="chat incoming">
                                            {/* <img src={ch} width="50" height="50" class="material-symbols-outlined" alt='' /> */}
                                            <p>Hi there 👋<br />How can I help you today?</p>
                                        </li>
                                    </ul>

                                    <div class="chat-input">
                                        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
                                        <span id="send-btn" class="material-symbols-rounded" ><img src={mic} width="22" alt="" /></span>

                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>
            </div>










            <div className='' style={style.section2}>

                <button id='bot' type="button" class="btn " style={style.section3} className='shake mb-4 bg-amber-400 ' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                    <img src={bot} alt="" width={50} />
                </button>

                <a href={mic2} download >
                    <button id={`step1`} style={style.section3} className=' shake2  mb-6 bg-amber-400'><a href={`http://localhost:8090/Upload/images/` + listPoints.pdf} download ><img src={doc} alt="" width={50} /></a></button>

                </a>

                <a href='/tours' className=' py-2 px-3 text-white rounded fw-bold mt-10 bg-red-600' >BACK</a>

            </div>

        </div>
    )
}

export default LocMap