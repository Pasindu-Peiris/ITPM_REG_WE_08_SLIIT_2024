import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Img from "../../Images/hp-blog-bg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateDes = () => {

    function Notify() {
        toast.success('Successful', {
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            position: "top-right",
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                width: '300px',         // Set the width
                height: '100px',        // Set the height
                fontSize: '20px',       // Set the font size
                alignItems: 'center',   // Center align items vertically
                fontFamily: '"Josefin Sans", sans-serif',
                display: 'flex',        // Use flexbox to align items
                justifyContent: 'center', // Center align items horizontally
                color: 'white',          // White text color
            },
            bodyClassName: 'custom-toast-body'

        });
    }

    function Notify2() {
        toast.error('Please Selete Image', {
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            position: "top-right",
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                width: '300px',         // Set the width
                height: '100px',        // Set the height
                fontSize: '20px',       // Set the font size
                alignItems: 'center',   // Center align items vertically
                fontFamily: '"Josefin Sans", sans-serif',
                display: 'flex',        // Use flexbox to align items
                justifyContent: 'center', // Center align items horizontally
                color: 'white',          // White text color
                borderRadius: '8px'
            },
            bodyClassName: 'custom-toast-body'

        });
    }

    function Notify3() {
        toast.warning('Some error with input', {
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            position: "top-right",
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                width: '300px',         // Set the width
                height: '100px',        // Set the height
                fontSize: '20px',       // Set the font size
                alignItems: 'center',   // Center align items vertically
                fontFamily: '"Josefin Sans", sans-serif',
                display: 'flex',        // Use flexbox to align items
                justifyContent: 'center', // Center align items horizontally
                color: 'white',          // White text color
                borderRadius: '8px'
            },
            bodyClassName: 'custom-toast-body'

        });
    }


    const [listPoint, setListPoint] = useState([]);

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

            setListPoint(response.data)
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


    const addImg = {
        width: "100%",
        height: "200vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
    };

    const style = {
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"

    }


    const [listPoints, setListPoints] = useState({
        trid: id,
        points1: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points2: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points3: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points4: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points5: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points6: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points7: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        points8: {
            m1: "",
            m2: "",
            m3: "",
            m4: ""
        },
        pdf: ""

    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Splitting the name to get the point identifier (e.g., "point1" or "point2")
        const [pointIdentifier, property] = name.split(' ');

        if (pointIdentifier === 'point1') {
            setListPoints({
                ...listPoints,
                points1: {
                    ...listPoints.points1,
                    [property]: value
                }
            });


        } else if (pointIdentifier === 'point2') {
            setListPoints({
                ...listPoints,
                points2: {
                    ...listPoints.points2,
                    [property]: value
                }
            });

        } else if (pointIdentifier === 'point3') {
            setListPoints({
                ...listPoints,
                points3: {
                    ...listPoints.points3,
                    [property]: value
                }
            });

        }
        else if (pointIdentifier === 'point4') {
            setListPoints({
                ...listPoints,
                points4: {
                    ...listPoints.points4,
                    [property]: value
                }
            });

        }
        else if (pointIdentifier === 'point5') {
            setListPoints({
                ...listPoints,
                points5: {
                    ...listPoints.points5,
                    [property]: value
                }
            });

        }
        else if (pointIdentifier === 'point6') {
            setListPoints({
                ...listPoints,
                points6: {
                    ...listPoints.points6,
                    [property]: value
                }
            });

        }
        else if (pointIdentifier === 'point7') {
            setListPoints({
                ...listPoints,
                points7: {
                    ...listPoints.points7,
                    [property]: value
                }
            });

        }
        else if (pointIdentifier === 'point8') {
            setListPoints({
                ...listPoints,
                points8: {
                    ...listPoints.points8,
                    [property]: value
                }
            });

        } else {
            setListPoints({ ...listPoints, [name]: value });
        }

    };

    const val = p1[0]


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(listPoints);

        axios.post('http://localhost:8090/dest/updatedest' + id, {
            ...listPoints,
            points1: Object.values(listPoints.points1),
            points2: Object.values(listPoints.points2),
            points3: Object.values(listPoints.points3),
            points4: Object.values(listPoints.points4),
            points5: Object.values(listPoints.points5),
            points6: Object.values(listPoints.points6),
            points7: Object.values(listPoints.points7),
            points8: Object.values(listPoints.points8)
        })

            .then(response => {
                console.log(response.data);
                Notify();
                setTimeout(function () {
                    window.location.reload();
                }, 2000); // 2000 milliseconds (2 seconds) 

            })
            .catch(error => {
                console.log(error);
                Notify2();

            });
    };

    useEffect(() => {

        document.getElementById('po10').value = p1[0];
        document.getElementById('po11').value = p1[1];
        document.getElementById('po12').value = p1[2];
        document.getElementById('po13').value = p1[3];




    })



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

                            <form action=""  >
                                <div className="box-input-row  mb-4 ">
                                    <h3 className='text-xl mb-2'>Destination Point 1</h3>
                                    <input type="text" id="po10" name={`point1 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2' onChange={handleChange} />
                                    <input type="text" id="po11" name={`point1 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] ml-3 p-2' onChange={handleChange}  />
                                    <input type="text" id="po12" name={`point1 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange}  />
                                    <input type="text" id="po13" name={`point1 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2 ' onChange={handleChange}  />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 2</h3>
                                    <input type="text" id="po" name={`point2 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p2[0]} />
                                    <input type="text" id="po" name={`point2 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2 ' onChange={handleChange} value={p2[1]} />
                                    <input type="text" id="po" name={`point2 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p2[2]} />
                                    <input type="text" id="po" name={`point2 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2 ' onChange={handleChange} value={p2[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 3</h3>
                                    <input type="text" id="po" name={`point3 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p3[0]} />
                                    <input type="text" id="po" name={`point3 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p3[1]} />
                                    <input type="text" id="po" name={`point3 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p3[2]} />
                                    <input type="text" id="po" name={`point3 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p3[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 4</h3>
                                    <input type="text" id="po" name={`point4 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p4[0]} />
                                    <input type="text" id="po" name={`point4 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p4[1]} />
                                    <input type="text" id="po" name={`point4 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p4[2]} />
                                    <input type="text" id="po" name={`point4 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p4[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 5</h3>
                                    <input type="text" id="po" name={`point5 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p5[0]} />
                                    <input type="text" id="po" name={`point5 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p5[1]} />
                                    <input type="text" id="po" name={`point5 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p5[2]} />
                                    <input type="text" id="po" name={`point5 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p5[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 6</h3>
                                    <input type="text" id="po" name={`point6 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p6[0]} />
                                    <input type="text" id="po" name={`point6 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p6[1]} />
                                    <input type="text" id="po" name={`point6 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p6[2]} />
                                    <input type="text" id="po" name={`point6 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p6[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 7</h3>
                                    <input type="text" id="po" name={`point7 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p7[0]} />
                                    <input type="text" id="po" name={`point7 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p7[1]} />
                                    <input type="text" id="po" name={`point7 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p7[2]} />
                                    <input type="text" id="po" name={`point7 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p7[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 8</h3>
                                    <input type="text" id="po" name={`point8 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2 me-3' onChange={handleChange} value={p8[0]} />
                                    <input type="text" id="po" name={`point8 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p8[1]} />
                                    <input type="text" id="po" name={`point8 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={p8[2]} />
                                    <input type="text" id="po" name={`point8 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2' onChange={handleChange} value={p8[3]} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Points PDF</h3>
                                    <input type="file" id="" name={`pdf`} onChange={handleChange} />
                                </div>

                                <div className="box-input-row  mb-4">


                                    <input type="submit" className=' mt-3 bg-amber-400 w-[100%] h-[45px] rounded' />

                                </div>



                            </form>
                        </div>


                    </div>


                </div>

            </div>

            <ToastContainer />


        </div>





    )
}

export default UpdateDes