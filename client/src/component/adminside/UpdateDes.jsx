import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Img from "../../Images/hp-blog-bg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDes = () => {


    const { id } = useParams();


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


    const [listPoints, setListPoints] = useState({
        trid: id,
        points1: [],
        points2: [],
        points3: [],
        points4: [],
        points5: [],
        points6: [],
        points7: [],
        points8: [],
        pdf: ""

    });





    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get("http://localhost:8090/dest/getdest/" + id);

            setListPoints(response.data);
        }

        fetchData();
    }, [id]); // Include 'id' in the dependency array


    const [listPoints2, setListPoints2] = useState({
        trid: id,
        points1: [4],
        points2: [4],
        points3: [4],
        points4: [4],
        points5: [4],
        points6: [4],
        points7: [4],
        points8: [4],
        pdf: ""

    });


    useEffect(() => {
        setListPoints2(prevState => ({
            ...prevState,
            points1: listPoints.points1,
            points2: listPoints.points2,
            points3: listPoints.points3,
            points4: listPoints.points4,
            points5: listPoints.points5,
            points6: listPoints.points6,
            points7: listPoints.points7,
            points8: listPoints.points8,
            pdf: listPoints.pdf
        }));
    }, [listPoints]);



    const addImg = {
        width: "100%",
        height: "200vh",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
    };

    const style = {
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"

    }

    



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




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(listPoints2);
        console.log(listPoints.points1);


        axios.post('http://localhost:8090/dest/updatedest/' + id, {
            ...listPoints2,
            points1: Object.values(listPoints2.points1),
            points2: Object.values(listPoints2.points2),
            points3: Object.values(listPoints2.points3),
            points4: Object.values(listPoints2.points4),
            points5: Object.values(listPoints2.points5),
            points6: Object.values(listPoints2.points6),
            points7: Object.values(listPoints2.points7),
            points8: Object.values(listPoints2.points8)
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

            upload();

        //alert(listPoints.points1.m1 + " " + listPoints.points1.m2);
        console.log(listPoints)
    };

    const [file, setfile] = useState("");




    const upload = () => {
        const formdata = new FormData()
        formdata.append('file', file)


        console.log(formdata)
        axios.post("http://localhost:8090/dest/updatepdf/" + id, formdata)
            .then(res => {

                console.log(res);
                // alert("Add")

            }).catch(err => {

                console.log(err);
            })

    }


    return (
    

        <div className='flex items-center justify-center' style={addImg}>

            <div className="des-box bg-zinc-100 rounded w-[70%] h-[auto] pb-5" style={style}>

                <div className="head-text flex items-center justify-between p-5">

                    <div className="button-pre">
                        <button className='p-3 bg-amber-400 rounded'> <a href={`/editdes/${id}`}>Previous</a></button>
                    </div>

                    <div className="text-heading text-3xl font-bold">
                        <h1>Update Destination point</h1>
                    </div>

                    <div className="button-finish">
                        <button className='p-3 bg-amber-400 rounded'>Next</button>
                    </div>
                </div>

                <div className="des-box-warp flex items-center justify-center">

                    <div className="box-head">
                        <div className="des-add-box ">

                            <form onSubmit={handleSubmit}  >
                                <div className="box-input-row  mb-4 ">
                                    <h3 className='text-xl mb-2'>Destination Point 1</h3>
                                    <input type="text" id="po10" name="point1 m1" placeholder={listPoints.points1[0]} className='w-[220px] h-[45px] p-2' onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points1: {
                                            ...prevState.points1,
                                            0: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po11" name={`point1 m2`} placeholder={listPoints.points1[1]} className='w-[220px] h-[45px] ml-3 p-2'
                                        onChange={(e) => setListPoints2((prevState) => ({
                                            ...prevState,
                                            points1: {
                                                ...prevState.points1,
                                                1: e.target.value,
                                            },
                                        }))} />
                                    <input type="text" id="po12" name={`point1 m3`}  placeholder={listPoints.points1[2]} className='w-[220px] h-[45px] mx-3 p-2'
                                        onChange={(e) => setListPoints2((prevState) => ({
                                            ...prevState,
                                            points1: {
                                                ...prevState.points1,
                                                2: e.target.value,
                                            },
                                        }))} />
                                    <input type="text" id="po13" name={`point1 m4`}  placeholder={listPoints.points1[3]} className='w-[220px] h-[45px] p-2 '
                                        onChange={(e) => setListPoints2((prevState) => ({
                                            ...prevState,
                                            points1: {
                                                ...prevState.points1,
                                                3: e.target.value,
                                            },
                                        }))} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 2</h3>
                                    <input type="text" id="po" name={`point2 m1`} placeholder={listPoints.points2[0]}className='w-[220px] h-[45px] p-2 me-3' onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points2: {
                                            ...prevState.points2,
                                            0: e.target.value,
                                        },
                                    }))}  />
                                    <input type="text" id="po" name={`point2 m2`} placeholder={listPoints.points2[1]} className='w-[220px] h-[45px] p-2 ' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points2: {
                                            ...prevState.points2,
                                            1: e.target.value,
                                        },
                                    }))}  />
                                    <input type="text" id="po" name={`point2 m3`} placeholder={listPoints.points2[2]} className='w-[220px] h-[45px] mx-3 p-2'
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points2: {
                                            ...prevState.points2,
                                            2: e.target.value,
                                        },
                                    }))}  />
                                    <input type="text" id="po" name={`point2 m4`} placeholder={listPoints.points2[3]} className='w-[220px] h-[45px] p-2 ' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points2: {
                                            ...prevState.points2,
                                            3: e.target.value,
                                        },
                                    }))}  />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 3</h3>
                                    <input type="text" id="po" name={`point3 m1`} placeholder={listPoints.points3[0]} className='w-[220px] h-[45px] p-2 me-3' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points3: {
                                            ...prevState.points3,
                                            0: e.target.value,
                                        },
                                    }))}  />
                                    <input type="text" id="po" name={`point3 m2`} placeholder={listPoints.points3[1]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points3: {
                                            ...prevState.points3,
                                            1: e.target.value,
                                        },
                                    }))}  />
                                    <input type="text" id="po" name={`point3 m3`} placeholder={listPoints.points3[2]} className='w-[220px] h-[45px] mx-3 p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points3: {
                                            ...prevState.points3,
                                            2: e.target.value,
                                        },
                                    }))}  />
                                    <input type="text" id="po" name={`point3 m4`} placeholder={listPoints.points3[3]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points3: {
                                            ...prevState.points3,
                                            3: e.target.value,
                                        },
                                    }))}  />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 4</h3>
                                    
                                    <input type="text" id="po" name={`point4 m1`} placeholder={listPoints.points4[0]} className='w-[220px] h-[45px] p-2 me-3' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points4: {
                                            ...prevState.points4,
                                            0: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point4 m2`} placeholder={listPoints.points4[1]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points4: {
                                            ...prevState.points4,
                                            1: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point4 m3`} placeholder={listPoints.points4[2]} className='w-[220px] h-[45px] mx-3 p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points4: {
                                            ...prevState.points4,
                                            2: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point4 m4`} placeholder={listPoints.points4[3]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points4: {
                                            ...prevState.points4,
                                            3: e.target.value,
                                        },
                                    }))} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 5</h3>
                                    <input type="text" id="po" name={`point5 m1`} placeholder={listPoints.points5[0]} className='w-[220px] h-[45px] p-2 me-3' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points5: {
                                            ...prevState.points5,
                                            0: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point5 m2`} placeholder={listPoints.points5[1]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points5: {
                                            ...prevState.points5,
                                            1: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point5 m3`} placeholder={listPoints.points5[2]} className='w-[220px] h-[45px] mx-3 p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points5: {
                                            ...prevState.points5,
                                            2: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point5 m4`} placeholder={listPoints.points5[3]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points5: {
                                            ...prevState.points5,
                                            3: e.target.value,
                                        },
                                    }))} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 6</h3>
                                    <input type="text" id="po" name={`point6 m1`} placeholder={listPoints.points6[0]} className='w-[220px] h-[45px] p-2 me-3' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points6: {
                                            ...prevState.points6,
                                            0: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point6 m2`} placeholder={listPoints.points6[1]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points6: {
                                            ...prevState.points6,
                                            1: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point6 m3`} placeholder={listPoints.points6[2]} className='w-[220px] h-[45px] mx-3 p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points6: {
                                            ...prevState.points6,
                                            2: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point6 m4`} placeholder={listPoints.points6[3]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points6: {
                                            ...prevState.points6,
                                            3: e.target.value,
                                        },
                                    }))} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 7</h3>
                                    <input type="text" id="po" name={`point7 m1`} placeholder={listPoints.points7[0]} className='w-[220px] h-[45px] p-2 me-3' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points7: {
                                            ...prevState.points7,
                                            0: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point7 m2`} placeholder={listPoints.points7[1]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points7: {
                                            ...prevState.points7,
                                            1: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point7 m3`} placeholder={listPoints.points7[2]} className='w-[220px] h-[45px] mx-3 p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points7: {
                                            ...prevState.points7,
                                            2: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point7 m4`} placeholder={listPoints.points7[3]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points7: {
                                            ...prevState.points7,
                                            3: e.target.value,
                                        },
                                    }))} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Point 8</h3>
                                    <input type="text" id="po" name={`point8 m1`} placeholder={listPoints.points8[0]} className='w-[220px] h-[45px] p-2 me-3' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points8: {
                                            ...prevState.points8,
                                            0: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point8 m2`} placeholder={listPoints.points8[1]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points8: {
                                            ...prevState.points8,
                                            1: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point8 m3`} placeholder={listPoints.points8[2]} className='w-[220px] h-[45px] mx-3 p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points8: {
                                            ...prevState.points8,
                                            2: e.target.value,
                                        },
                                    }))} />
                                    <input type="text" id="po" name={`point8 m4`} placeholder={listPoints.points8[3]} className='w-[220px] h-[45px] p-2' 
                                    onChange={(e) => setListPoints2((prevState) => ({
                                        ...prevState,
                                        points8: {
                                            ...prevState.points8,
                                            3: e.target.value,
                                        },
                                    }))} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Points PDF</h3>
                                    <input type="file" id="" placeholder={listPoints.pdf} name={`pdf`} 
                                    onChange={(e) => {
                                        setfile(e.target.files[0])
                                    }} accept=".pdf" />
                                    <button className='btn btn-primary'><a href={`http://localhost:8090/Upload/images/` + listPoints.pdf } download className=' text-white'>Download</a></button>
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