import React from 'react'

const Hfotter = () => {

    const style = {
        backgroundColor:"#171716",
        height:"25vh"
    }

  return (

    <div className='w-[100%] flex align-top justify-center items-center text-blue-50' style={style}>

        <div className="menu block">
            <ul className='flex align-middle justify-center gap-8 text-blue-50'>
                <li className='hover:text-amber-400'>Customer support</li>
                <li className='hover:text-amber-400'>Privacy & policy</li>
                <li className='hover:text-amber-400'>About Us</li>
                <li className='hover:text-amber-400'>Terms & conditions</li>
            </ul>

            <h2 className='text-center mt-5'>Copyright © 2024 All Rights Reserved.</h2>
        </div>

       


    </div>

  )
}

export default Hfotter