import React, { useState } from 'react';
import Img from '../../Images/herobg.jpg'
import { TypeAnimation } from 'react-type-animation';



const HsectionOne = () => {

    const addImg = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover"
    }

    const fontSize = {
        f0: {
            fontSize: "3rem",
            letterSpacing: "8px"
        },
        f1: {
            fontSize: "5rem",
            fontWeight: "bold",
            letterSpacing: "12px"
        },
        f2: {
            fontSize: "1.1rem",
            letterSpacing: "0.5px"

        }
    }

    const [typingStatus, setTypingStatus] = useState('Initializing');

    return (


        <div className='flex items-center justify-center  text-gray-100' style={addImg} >

            <div className="main-block block text-center">

                <div className="block-1 p-2 mt-12">
                    <h2 className='' style={fontSize.f0}>EXPLORE</h2>
                </div>

                <div className="block-2 p-2">
                <TypeAnimation
                    sequence={[
                        1500,
                        () => {
                            setTypingStatus('Typing...');
                        },
                        'THE NEW WORLD',
                        () => {
                            setTypingStatus('Done Typing');
                        },
                        1000,
                        () => {
                            setTypingStatus('Deleting...');
                        },
                        8500,
                        '',
                        () => {
                            setTypingStatus('Done Deleting');
                        },
                    ]}
                    style={fontSize.f1}
                    repeat={Infinity}
                    speed={10}
                />
                </div>

                <div className="block-3 p-1">
                    <h3 style={fontSize.f2}>Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</h3>

                </div>

                

                <div className="side-button flex justify-center items-center mt-6 " >
                    <a href="#!" className='w-48 h-14 flex justify-center items-center rounded bg-amber-500 text-lg '> Discover Tours</a>
                </div>

            </div>

        </div>


    )
}

export default HsectionOne