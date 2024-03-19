import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Img from "../../Images/hp-blog-bg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OneUpdateDes = () => {


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
               alert("Data Updated");
                setTimeout(function () {
                    window.location.reload();
                }, 2000); // 2000 milliseconds (2 seconds) 

            })
            .catch(error => {
                console.log(error);
                alert("Error");

            });
    };

    useEffect(() => {  
        document.getElementById("c1").value = p1[0]
    })

    const dis = (mess) => {
        alert(mess);
    }


    return (
        <div>

            <form>
            
                <h3 className='text-xl mb-2'>Destination Point 1</h3>
                <input type="text" name={`point1 m1`} placeholder='Point name' className='w-[220px] h-[45px] p-2' id="c1"  onChange={(e) => dis(e.target.value)} />
                <input type="text" name={`point1 m2`} placeholder='Point Latitude' className='w-[220px] h-[45px] ml-3 p-2' onChange={handleChange}  />
                <input type="text" name={`point1 m3`} placeholder='Point Longitude' className='w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} value={1} />
                <input type="text" name={`point1 m4`} placeholder='Small description' className='w-[220px] h-[45px] p-2 ' onChange={handleChange} value={p1[3]} />
            
            </form>



        </div>
    )
}

export default OneUpdateDes