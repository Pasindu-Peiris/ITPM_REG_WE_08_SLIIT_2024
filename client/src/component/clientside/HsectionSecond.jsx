import React from 'react'

const HsectionSecond = () => {

    const style = {
        marginTop: "-65px",


    }

    const board = {
        board: "none",
        outline: "none"
    }

    return (

        <div className='flex items-center justify-center'>

            <div className="w-[80%] flex items-center justify-center bg-white h-32 shadow-2xl rounded-lg" style={style}>

                <form action="" className=' w-[80%] flex items-around justify-between'>

                    <div className="block1 w-[300px] " >
                        <label for="keyword" className='py-1'>Keyword</label><br></br>
                        <input style={board} type="text" name="keyword" id="keyword" placeholder='Type your Keywords...' className='py-2' />
                    </div>

                    <div className="block2 w-[250px] mx-4" style={board}>
                        <label for="keyword" className='py-1'>Destination</label><br></br>
                        <select name="cars" id="cars" className='w-[100%] py-2' >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="block3 w-[250px] mx-4" style={board}>
                        <label for="keyword " className='py-1'>Duration</label><br></br>
                        <select name="cars" id="cars" className='w-[100%] py-2'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="block4 mx-4 py-3 ml-2 flex align-middle justify-center w-36 rounded bg-amber-500 text-blue-50">
                        <button>Search <i className="fas fa-search mx-2"></i></button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default HsectionSecond;