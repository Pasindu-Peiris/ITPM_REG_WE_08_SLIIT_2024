import React, { useEffect, useState } from 'react'
import axios from "axios"


const Onedest = () => {

    const [listPoints, setListPoints] = useState([]);
    const id = 1;

    const [p1, setp1] = useState([4]);
    const [p2, setp2] = useState([4]);
    const [p3, setp3] = useState([4]);
    const [p4, setp4] = useState([4]);
    const [p5, setp5] = useState([4]);
    const [p6, setp6] = useState([4]);
    const [p7, setp7] = useState([4]);
    const [p8, setp8] = useState([4]);


    useEffect(() => {
        axios.get("http://localhost:8090/dest/getdest/" + id,).then((response) => {

            setListPoints(response.data)
            setp2(response.data.points2)
            setp1(response.data.points1)
            setp3(response.data.points3)
            setp4(response.data.points4)
            setp5(response.data.points5)
            setp6(response.data.points6)
            setp7(response.data.points7)
            setp8(response.data.points8)


            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        })
    })





    return (
        <div>
            <h1>{listPoints.trid}</h1>
            <h1>p1</h1>
            <h1 className=' fs-5'>{p1[0]}</h1>
            <h1 className=' fs-5'>{p1[1]}</h1>
            <h1 className=' fs-5'>{p1[2]}</h1>
            <h1 className=' fs-5'>{p1[3]}</h1>

            <br></br>
            <h1>p2</h1>
            <h1 className=' fs-5'>{p2[0]}</h1>
            <h1 className=' fs-5'>{p2[1]}</h1>
            <h1 className=' fs-5'>{p2[2]}</h1>
            <h1 className=' fs-5'>{p2[3]}</h1>

            <br></br>
            <h1>p3</h1>
            <h1 className=' fs-5'>{p3[0]}</h1>
            <h1 className=' fs-5'>{p3[1]}</h1>
            <h1 className=' fs-5'>{p3[2]}</h1>
            <h1 className=' fs-5'>{p3[3]}</h1>

            <br></br>
            <h1>p4</h1>
            <h1 className=' fs-5'>{p4[0]}</h1>
            <h1 className=' fs-5'>{p4[1]}</h1>
            <h1 className=' fs-5'>{p4[2]}</h1>
            <h1 className=' fs-5'>{p4[3]}</h1>

            <br></br>
            <h1>p5</h1>
            <h1 className=' fs-5'>{p5[0]}</h1>
            <h1 className=' fs-5'>{p5[1]}</h1>
            <h1 className=' fs-5'>{p5[2]}</h1>
            <h1 className=' fs-5'>{p5[3]}</h1>

            <br></br>
            <h1>p6</h1>
            <h1 className=' fs-5'>{p6[0]}</h1>
            <h1 className=' fs-5'>{p6[1]}</h1>
            <h1 className=' fs-5'>{p6[2]}</h1>
            <h1 className=' fs-5'>{p6[3]}</h1>

            <br></br>
            <h1>p7</h1>
            <h1 className=' fs-5'>{p7[0]}</h1>
            <h1 className=' fs-5'>{p7[1]}</h1>
            <h1 className=' fs-5'>{p7[2]}</h1>
            <h1 className=' fs-5'>{p7[3]}</h1>

            <br></br>
            <h1>p8</h1>
            <h1 className=' fs-5'>{p8[0]}</h1>
            <h1 className=' fs-5'>{p8[1]}</h1>
            <h1 className=' fs-5'>{p8[2]}</h1>
            <h1 className=' fs-5'>{p8[3]}</h1>

            <h1>{listPoints.pdf}</h1>




        </div>
    )
}

export default Onedest