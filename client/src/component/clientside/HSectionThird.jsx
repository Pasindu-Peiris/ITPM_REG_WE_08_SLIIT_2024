import React from 'react'
import Img from '../../Images/top-bg.jpg'

const HSectionThird = () => {

    const addImg = {
        width: "100%",
        height: "80vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition:"top"
    }


    return (

        <div className='flex items-center justify-center  text-gray-100' style={addImg}>




        </div>

    )
}

export default HSectionThird;