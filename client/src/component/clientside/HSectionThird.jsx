import React from 'react'
import Img from '../../Images/top-bg.jpg'
import Img1 from '../../Images/icon1.png'
import Img2 from '../../Images/icon2.png'
import Img3 from '../../Images/icon3.png'

const HSectionThird = () => {

    const addImg = {
        width: "100%",
        height: "80vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "top"
    }


    return (

        <div className='flex items-center justify-center  text-gray-100' style={addImg}>


            <div className="main-block grid grid-cols-3 gap-5 text-black w-[90%] ">

                <div className="block-1 block items-center justify-center text-center m-2">

                    <div className="block-img flex items-center justify-center p-3">
                        <img src={Img1} alt="" width={140} className='' />
                    </div>

                    <h1 className='text-2xl font-semibold p-2'>15 Years of Experiences</h1>

                    <p className='p-1 text-xl'>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>

                </div>

                <div className="block-1 block items-center justify-center text-center  m-2">

                    <div className="block-img flex items-center justify-center p-3">
                        <img src={Img2} alt="" width={140} className='' />
                    </div>

                    <h1 className='text-2xl font-semibold p-2'>200+ Camps To Visit</h1>

                    <p className='p-1 text-xl'>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>

                </div>

                <div className="block-1 block items-center justify-center text-center  m-2">

                    <div className="block-img flex items-center justify-center p-3">
                        <img src={Img3} alt="" width={140} className='' />
                    </div>

                    <h1 className='text-2xl font-semibold p-2'>Big Community</h1>

                    <p className='p-1 text-xl'>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>

                </div>

            </div>


        </div>

    )
}

export default HSectionThird;