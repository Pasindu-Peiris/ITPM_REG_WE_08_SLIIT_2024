import React, { useState } from 'react'
import Img from "../../Images/hp-blog-bg.jpg";


const AddDesPoint = () => {

    const [name, SetName] = useState('');

    const addImg = {
        width: "100%",
        height: "200vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
   };

    const style = {
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
 
    }
    const  handleSubmit = (e) => {
        e.preventDefault();

        alert(name)
    }
    
    


    return (

        <div className='flex items-center justify-center' style={addImg}>

            <div className="des-box bg-zinc-100 rounded w-[70%] h-[auto] pb-5" style={style}>

                <div className="head-text flex items-center justify-between p-5">

                    <div className="button-pre">
                        <button className='p-3 bg-amber-400 rounded'>Previous</button>
                    </div>

                    <div className="text-heading text-3xl font-bold">
                        <h1>Destination point</h1>
                    </div>

                    <div className="button-finish">
                        <button className='p-3 bg-amber-400 rounded'>Next</button>
                    </div>
                </div>

                <div className="des-box-warp flex items-center justify-center">

                    <div className="box-head">
                        <div className="des-add-box ">

                            <form action="" onSubmit={handleSubmit} >
                                <div className="box-input-row  mb-4 ">
                                    <h3 className='text-xl mb-2'>Destination Point 1</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' onChange={(e) => {
                                        SetName(e.target.value)
                                    }} />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 2</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 3</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 4</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 5</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 6</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 7</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 8</h3>
                                    <input type="text" placeholder='Point Latitude' className='w-[280px] h-[45px] p-2' />
                                    <input type="text" placeholder='Point Longitude' className='w-[280px] h-[45px] mx-3 p-2' />
                                    <input type="text" placeholder='Small description' className='w-[280px] h-[45px] p-2 ' />
                                </div>

                                <div className="box-input-row  mb-4">
                                <h3 className='text-xl mb-2'>Destination Points PDF</h3>
                                    <input type="file" name="" id="" />
                                </div>

                                <div className="box-input-row  mb-4">


                                    <input type="submit" className=' mt-3 bg-amber-400 w-[100%] h-[45px] rounded' />

                                </div>

                                

                            </form>
                        </div>


                    </div>


                </div>

            </div>




        </div>
    )
}

export default AddDesPoint