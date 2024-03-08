import React, { useState } from 'react'
import Img from '../../Images/wave-bg.jpg'
import Img2 from '../../Images/map.png'
import Img3 from '../../Images/w1.jpg'

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Hsection4 = () => {

    const addImg = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "125%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    }

    const [count, setCount] = useState(false)

    return (


        <div style={addImg} className='flex align-top justify-center items-center'>

            <div className="col-one w-[50%]">

            </div>

            <div className="col-one block w-[45%]">

                <h1 className='text-4xl font-bold mb-4'>Camper is the best way to find camping tours. Let’s make the most memorable adventures.</h1>

                <p className='text-xl mb-3'>Camper Tour is an incredible way to have an adventurous outdoor experience of world renowned national parks and wilderness destinations while hiking with only a light daypack and sleeping soundly in comfortable, vehicle-accessible camps.</p>

                <div className="block-in flex  justify-center items-center w-[95%] my-4">

                    <ScrollTrigger onEnter={() => { setCount(true) }} onExit={() => { setCount(false) }} className="ScrollTrigger flex  justify-between items-center w-[100%]">

                        <div className="block1 me-5">
                            <div className="img-block my-4">
                                <img src={Img3} alt="" width={70} />
                            </div>

                            {count &&
                                <h2 className='text-5xl font-bold my-4 text-amber-500'><CountUp end={1940} duration={5}></CountUp> +</h2>
                            }

                            <h2 className='font-bold text-xl my-2'>The First Trip We Operated</h2>

                            <p>We are in this industries for more than 40 year!</p>

                        </div>

                        <div className="block1">
                            <div className="img-block my-4">
                                <img src={Img2} alt="" width={70} />
                            </div>

                            {count &&
                                <h2 className='text-5xl font-bold my-4 text-amber-500'><CountUp end={980} duration={5}></CountUp> +</h2>
                            }

                            <h2 className='font-bold text-xl my-2'>The First Trip We Operated</h2>

                            <p>We are in this industries for more than 40 year!</p>
                        </div>

                    </ScrollTrigger>

                </div>

            </div>

        </div>
    )


}

export default Hsection4