import React from 'react'
import Img1 from '../../Images/g1.png'
import Img2 from '../../Images/g2.png'
import Img3 from '../../Images/g3.png'
import Img4 from '../../Images/g4.png'
import Img5 from '../../Images/g5.png'

const Hsection5 = () => {

    const style = {
        height: "50vh",
        backgroundColor:"white"

    }


    return (

        <div className='flex justify-center items-center align-middle' style={style}>

            <div className='grid grid-cols-5 gap-4 w-[90%] mx-auto item-center ' >

                <img src={Img1} alt="" width={220} />
                <img src={Img2} alt="" width={220} />
                <img src={Img3} alt="" width={220} />
                <img src={Img4} alt="" width={220} />
                <img src={Img5} alt="" width={220} />
            </div>


        </div>

    )
}

export default Hsection5