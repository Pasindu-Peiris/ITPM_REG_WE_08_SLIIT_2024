import React, { useEffect, useState } from 'react'
import Img from "../../Images/hp-blog-bg.jpg";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const AddDesPoint = () => {

    const { id } = useParams();
    // <a href={`/get/${item._id}`} className="btn btn-success cix"><i class="fa-solid fa-pen-to-square" style={{ color: "#ffffff" }}></i></a>

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


    const handleSubmit = (e) => {

        e.preventDefault();
        
        console.log(listPoints);


        axios.post('http://localhost:8090/dest/adddest', {
            ...listPoints,
            points1: Object.values(listPoints.points1),
            points2: Object.values(listPoints.points2),
            points3: Object.values(listPoints.points3),
            points4: Object.values(listPoints.points4),
            points5: Object.values(listPoints.points5),
            points6: Object.values(listPoints.points6),
            points7: Object.values(listPoints.points7),
            points8: Object.values(listPoints.points8)

        }).then(response => {
            console.log(response.data);
            Notify();
            upload();

            setTimeout(function () {
                window.location.href = "/editdes/" + id;
            }, 2000); // 2000 milliseconds (2 seconds) 

        })
            .catch(error => {
                console.log(error);
                Notify2();

            });




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

    const borStyle = {
        border: 'none',
        outline: "none"
    }





    const Check = (name, val) => {
        let err1 = document.getElementsByClassName('err');
        let iBox = document.getElementsByClassName('boxinput');

        if (val === "point1 m1" || val === "point1 m2" || val === "point1 m3" || val === "point1 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[0].innerHTML = "Name must be more than 3 characters";
                err1[0].style.color = "red";
                iBox[0].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[0].innerHTML = "Name must be start with character";
                err1[0].style.color = "red";
                iBox[0].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[0].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[0].style.color = "red";
                iBox[0].style.border = "2px solid red";
            }
            else {
                err1[0].innerHTML = "Success";
                err1[0].style.color = "green";
                iBox[0].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[0].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)


        } else if (val === "point2 m1" || val === "point2 m2" || val === "point2 m3" || val === "point2 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[1].innerHTML = "Name must be more than 3 characters";
                err1[1].style.color = "red";
                iBox[4].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[1].innerHTML = "Name must be start with character";
                err1[1].style.color = "red";
                iBox[4].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[1].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[1].style.color = "red";
                iBox[4].style.border = "2px solid red";
            }
            else {
                err1[1].innerHTML = "Success";
                err1[1].style.color = "green";
                iBox[4].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[1].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)

        } else if (val === "point3 m1" || val === "point3 m2" || val === "point3 m3" || val === "point3 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[2].innerHTML = "Name must be more than 3 characters";
                err1[2].style.color = "red";
                iBox[8].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[2].innerHTML = "Name must be start with character";
                err1[2].style.color = "red";
                iBox[8].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[2].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[2].style.color = "red";
                iBox[8].style.border = "2px solid red";
            }
            else {
                err1[2].innerHTML = "Success";
                err1[2].style.color = "green";
                iBox[8].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[1].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)


        }
        else if (val === "point4 m1" || val === "point4 m2" || val === "point4 m3" || val === "point4 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[3].innerHTML = "Name must be more than 3 characters";
                err1[3].style.color = "red";
                iBox[12].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[3].innerHTML = "Name must be start with character";
                err1[3].style.color = "red";
                iBox[12].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[3].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[3].style.color = "red";
                iBox[12].style.border = "2px solid red";
            }
            else {
                err1[3].innerHTML = "Success";
                err1[3].style.color = "green";
                iBox[12].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[3].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point5 m1" || val === "point5 m2" || val === "point5 m3" || val === "point5 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[4].innerHTML = "Name must be more than 3 characters";
                err1[4].style.color = "red";
                iBox[16].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[4].innerHTML = "Name must be start with character";
                err1[4].style.color = "red";
                iBox[16].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[4].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[4].style.color = "red";
                iBox[16].style.border = "2px solid red";
            }
            else {
                err1[4].innerHTML = "Success";
                err1[4].style.color = "green";
                iBox[16].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[4].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point6 m1" || val === "point6 m2" || val === "point6 m3" || val === "point6 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[5].innerHTML = "Name must be more than 3 characters";
                err1[5].style.color = "red";
                iBox[20].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[5].innerHTML = "Name must be start with character";
                err1[5].style.color = "red";
                iBox[20].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[5].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[5].style.color = "red";
                iBox[20].style.border = "2px solid red";
            }
            else {
                err1[5].innerHTML = "Success";
                err1[5].style.color = "green";
                iBox[20].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[5].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point7 m1" || val === "point7 m2" || val === "point7 m3" || val === "point7 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[6].innerHTML = "Name must be more than 3 characters";
                err1[6].style.color = "red";
                iBox[24].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[6].innerHTML = "Name must be start with character";
                err1[6].style.color = "red";
                iBox[24].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[6].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[6].style.color = "red";
                iBox[24].style.border = "2px solid red";
            }
            else {
                err1[6].innerHTML = "Success";
                err1[6].style.color = "green";
                iBox[24].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[6].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point8 m1" || val === "point8 m2" || val === "point8 m3" || val === "point8 m4") {
            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[7].innerHTML = "Name must be more than 3 characters";
                err1[7].style.color = "red";
                iBox[28].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[7].innerHTML = "Name must be start with character";
                err1[7].style.color = "red";
                iBox[28].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[7].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[7].style.color = "red";
                iBox[28].style.border = "2px solid red";
            }
            else {
                err1[7].innerHTML = "Success";
                err1[7].style.color = "green";
                iBox[28].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[7].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }


    }

    const Check2 = (name, val) => {
        let err1 = document.getElementsByClassName('err');
        let iBox = document.getElementsByClassName('boxinput');

        if (val === "point1 m1" || val === "point1 m2" || val === "point1 m3" || val === "point1 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[0].innerHTML = "Name must be more than 3 characters";
                err1[0].style.color = "red";
                iBox[1].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[0].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[0].style.color = "red";
                iBox[1].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[0].innerHTML = "";
                err1[0].style.color = "red";
                iBox[1].style.border = "2px solid red";
            }
            else {
                err1[0].innerHTML = "Success";
                err1[0].style.color = "green";
                iBox[1].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[0].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point2 m1" || val === "point2 m2" || val === "point2 m3" || val === "point2 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[1].innerHTML = "Name must be more than 3 characters";
                err1[1].style.color = "red";
                iBox[5].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[1].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[1].style.color = "red";
                iBox[5].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[1].innerHTML = "";
                err1[1].style.color = "red";
                iBox[5].style.border = "2px solid red";
            }
            else {
                err1[1].innerHTML = "Success";
                err1[1].style.color = "green";
                iBox[5].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[1].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point3 m1" || val === "point3 m2" || val === "point3 m3" || val === "point3 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[2].innerHTML = "Name must be more than 3 characters";
                err1[2].style.color = "red";
                iBox[9].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[2].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[2].style.color = "red";
                iBox[9].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[2].innerHTML = "";
                err1[2].style.color = "red";
                iBox[9].style.border = "2px solid red";
            }
            else {
                err1[2].innerHTML = "Success";
                err1[2].style.color = "green";
                iBox[9].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[2].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point4 m1" || val === "point4 m2" || val === "point4 m3" || val === "point4 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[3].innerHTML = "Name must be more than 3 characters";
                err1[3].style.color = "red";
                iBox[13].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[3].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[3].style.color = "red";
                iBox[13].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[3].innerHTML = "";
                err1[3].style.color = "red";
                iBox[13].style.border = "2px solid red";
            }
            else {
                err1[3].innerHTML = "Success";
                err1[3].style.color = "green";
                iBox[13].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[3].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point5 m1" || val === "point5 m2" || val === "point5 m3" || val === "point5 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[4].innerHTML = "Name must be more than 3 characters";
                err1[4].style.color = "red";
                iBox[17].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[4].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[4].style.color = "red";
                iBox[17].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[4].innerHTML = "";
                err1[4].style.color = "red";
                iBox[17].style.border = "2px solid red";
            }
            else {
                err1[4].innerHTML = "Success";
                err1[4].style.color = "green";
                iBox[17].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[4].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point6 m1" || val === "point6 m2" || val === "point6 m3" || val === "point6 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[5].innerHTML = "Name must be more than 3 characters";
                err1[5].style.color = "red";
                iBox[21].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[5].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[5].style.color = "red";
                iBox[21].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[5].innerHTML = "";
                err1[5].style.color = "red";
                iBox[21].style.border = "2px solid red";
            }
            else {
                err1[5].innerHTML = "Success";
                err1[5].style.color = "green";
                iBox[21].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[5].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point7 m1" || val === "point7 m2" || val === "point7 m3" || val === "point7 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[6].innerHTML = "Name must be more than 3 characters";
                err1[6].style.color = "red";
                iBox[25].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[6].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[6].style.color = "red";
                iBox[25].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[6].innerHTML = "";
                err1[6].style.color = "red";
                iBox[25].style.border = "2px solid red";
            }
            else {
                err1[6].innerHTML = "Success";
                err1[6].style.color = "green";
                iBox[25].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[6].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point8 m1" || val === "point8 m2" || val === "point8 m3" || val === "point8 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[7].innerHTML = "Name must be more than 3 characters";
                err1[7].style.color = "red";
                iBox[29].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[7].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[7].style.color = "red";
                iBox[29].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[7].innerHTML = "";
                err1[7].style.color = "red";
                iBox[29].style.border = "2px solid red";
            }
            else {
                err1[7].innerHTML = "Success";
                err1[7].style.color = "green";
                iBox[29].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[7].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }

    }


    const Check3 = (name, val) => {
        let err1 = document.getElementsByClassName('err');
        let iBox = document.getElementsByClassName('boxinput');

        if (val === "point1 m1" || val === "point1 m2" || val === "point1 m3" || val === "point1 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[0].innerHTML = "Name must be more than 3 characters";
                err1[0].style.color = "red";
                iBox[2].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[0].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[0].style.color = "red";
                iBox[2].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[0].innerHTML = "";
                err1[0].style.color = "red";
                iBox[2].style.border = "2px solid red";
            }
            else {
                err1[0].innerHTML = "Success";
                err1[0].style.color = "green";
                iBox[2].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[0].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point2 m1" || val === "point2 m2" || val === "point2 m3" || val === "point2 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[1].innerHTML = "Name must be more than 3 characters";
                err1[1].style.color = "red";
                iBox[6].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[1].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[1].style.color = "red";
                iBox[6].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[1].innerHTML = "";
                err1[1].style.color = "red";
                iBox[6].style.border = "2px solid red";
            }
            else {
                err1[1].innerHTML = "Success";
                err1[1].style.color = "green";
                iBox[6].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[1].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point3 m1" || val === "point3 m2" || val === "point3 m3" || val === "point3 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[2].innerHTML = "Name must be more than 3 characters";
                err1[2].style.color = "red";
                iBox[10].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[2].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[2].style.color = "red";
                iBox[10].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[2].innerHTML = "";
                err1[2].style.color = "red";
                iBox[10].style.border = "2px solid red";
            }
            else {
                err1[2].innerHTML = "Success";
                err1[2].style.color = "green";
                iBox[10].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[2].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point4 m1" || val === "point4 m2" || val === "point4 m3" || val === "point4 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[3].innerHTML = "Name must be more than 3 characters";
                err1[3].style.color = "red";
                iBox[14].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[3].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[3].style.color = "red";
                iBox[14].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[3].innerHTML = "";
                err1[3].style.color = "red";
                iBox[14].style.border = "2px solid red";
            }
            else {
                err1[3].innerHTML = "Success";
                err1[3].style.color = "green";
                iBox[14].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[3].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point5 m1" || val === "point5 m2" || val === "point5 m3" || val === "point5 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[4].innerHTML = "Name must be more than 3 characters";
                err1[4].style.color = "red";
                iBox[18].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[4].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[4].style.color = "red";
                iBox[18].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[4].innerHTML = "";
                err1[4].style.color = "red";
                iBox[18].style.border = "2px solid red";
            }
            else {
                err1[4].innerHTML = "Success";
                err1[4].style.color = "green";
                iBox[18].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[4].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point6 m1" || val === "point6 m2" || val === "point6 m3" || val === "point6 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[5].innerHTML = "Name must be more than 3 characters";
                err1[5].style.color = "red";
                iBox[22].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[5].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[5].style.color = "red";
                iBox[22].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[5].innerHTML = "";
                err1[5].style.color = "red";
                iBox[22].style.border = "2px solid red";
            }
            else {
                err1[5].innerHTML = "Success";
                err1[5].style.color = "green";
                iBox[22].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[5].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point7 m1" || val === "point7 m2" || val === "point7 m3" || val === "point7 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[6].innerHTML = "Name must be more than 3 characters";
                err1[6].style.color = "red";
                iBox[26].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[6].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[6].style.color = "red";
                iBox[26].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[6].innerHTML = "";
                err1[6].style.color = "red";
                iBox[26].style.border = "2px solid red";
            }
            else {
                err1[6].innerHTML = "Success";
                err1[6].style.color = "green";
                iBox[26].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[6].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point8 m1" || val === "point8 m2" || val === "point8 m3" || val === "point8 m4") {
            // Regular expression to match only dots and numbers
            let regex1 = /^[0-9.]+$/;

            let regex2 = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[7].innerHTML = "Name must be more than 3 characters";
                err1[7].style.color = "red";
                iBox[30].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[7].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[7].style.color = "red";
                iBox[30].style.border = "2px solid red";
            } else if (!regex2.test(name)) {
                err1[7].innerHTML = "";
                err1[7].style.color = "red";
                iBox[30].style.border = "2px solid red";
            }
            else {
                err1[7].innerHTML = "Success";
                err1[7].style.color = "green";
                iBox[30].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[7].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }

    }


    const Check4 = (name, val) => {

        let err1 = document.getElementsByClassName('err');
        let iBox = document.getElementsByClassName('boxinput');


        if (val === "point1 m1" || val === "point1 m2" || val === "point1 m3" || val === "point1 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[0].innerHTML = "Name must be more than 3 characters";
                err1[0].style.color = "red";
                iBox[3].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[0].innerHTML = "Name must be start with character";
                err1[0].style.color = "red";
                iBox[3].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[0].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[0].style.color = "red";
                iBox[3].style.border = "2px solid red";
            }
            else {
                err1[0].innerHTML = "Success";
                err1[0].style.color = "green";
                iBox[3].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[0].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point2 m1" || val === "point2 m2" || val === "point2 m3" || val === "point2 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[1].innerHTML = "Name must be more than 3 characters";
                err1[1].style.color = "red";
                iBox[7].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[1].innerHTML = "Name must be start with character";
                err1[1].style.color = "red";
                iBox[7].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[1].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[1].style.color = "red";
                iBox[7].style.border = "2px solid red";
            }
            else {
                err1[1].innerHTML = "Success";
                err1[1].style.color = "green";
                iBox[7].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[1].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point3 m1" || val === "point3 m2" || val === "point3 m3" || val === "point3 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[2].innerHTML = "Name must be more than 3 characters";
                err1[2].style.color = "red";
                iBox[11].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[2].innerHTML = "Name must be start with character";
                err1[2].style.color = "red";
                iBox[11].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[2].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[2].style.color = "red";
                iBox[11].style.border = "2px solid red";
            }
            else {
                err1[2].innerHTML = "Success";
                err1[2].style.color = "green";
                iBox[11].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[2].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point4 m1" || val === "point4 m2" || val === "point4 m3" || val === "point4 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[3].innerHTML = "Name must be more than 3 characters";
                err1[3].style.color = "red";
                iBox[15].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[3].innerHTML = "Name must be start with character";
                err1[3].style.color = "red";
                iBox[15].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[3].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[3].style.color = "red";
                iBox[15].style.border = "2px solid red";
            }
            else {
                err1[3].innerHTML = "Success";
                err1[3].style.color = "green";
                iBox[15].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[3].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point5 m1" || val === "point5 m2" || val === "point5 m3" || val === "point5 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[4].innerHTML = "Name must be more than 3 characters";
                err1[4].style.color = "red";
                iBox[19].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[4].innerHTML = "Name must be start with character";
                err1[4].style.color = "red";
                iBox[19].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[4].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[4].style.color = "red";
                iBox[19].style.border = "2px solid red";
            }
            else {
                err1[4].innerHTML = "Success";
                err1[4].style.color = "green";
                iBox[19].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[4].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }

        else if (val === "point6 m1" || val === "point6 m2" || val === "point6 m3" || val === "point6 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[5].innerHTML = "Name must be more than 3 characters";
                err1[5].style.color = "red";
                iBox[23].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[5].innerHTML = "Name must be start with character";
                err1[5].style.color = "red";
                iBox[23].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[5].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[5].style.color = "red";
                iBox[23].style.border = "2px solid red";
            }
            else {
                err1[5].innerHTML = "Success";
                err1[5].style.color = "green";
                iBox[23].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[5].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point7 m1" || val === "point7 m2" || val === "point7 m3" || val === "point7 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[6].innerHTML = "Name must be more than 3 characters";
                err1[6].style.color = "red";
                iBox[27].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[6].innerHTML = "Name must be start with character";
                err1[6].style.color = "red";
                iBox[27].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[6].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[6].style.color = "red";
                iBox[27].style.border = "2px solid red";
            }
            else {
                err1[6].innerHTML = "Success";
                err1[6].style.color = "green";
                iBox[27].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[6].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }
        else if (val === "point8 m1" || val === "point8 m2" || val === "point8 m3" || val === "point8 m4") {

            let regex = /^[a-zA-Z0-9]*[^{}()/!#@$%^&]+[a-zA-Z0-9]*$/;

            if (name.length < 3) {
                err1[7].innerHTML = "Name must be more than 3 characters";
                err1[7].style.color = "red";
                iBox[31].style.border = "2px solid red";
            } else if (/^\d/.test(name)) {
                err1[7].innerHTML = "Name must be start with character";
                err1[7].style.color = "red";
                iBox[31].style.border = "2px solid red";
            }
            else if (!regex.test(name)) {
                err1[7].innerHTML = "Name must not contain {}, (), /, !, #, @, $, %, ^, &";
                err1[7].style.color = "red";
                iBox[31].style.border = "2px solid red";
            }
            else {
                err1[7].innerHTML = "Success";
                err1[7].style.color = "green";
                iBox[31].style.border = "2px solid #1a191a00";
            }
            setTimeout(function () {
                err1[7].innerHTML = " ";
            }, 20000); // 2000 milliseconds (2 seconds)
        }

    }






    return (

        <div className='flex items-center justify-center' style={addImg}>

            <div className="des-box bg-zinc-100 rounded w-[70%] h-[auto] pb-5" style={style}>

                <div className="head-text flex items-center justify-between p-5">

                    <div className="button-pre">
                        <button className='p-3 bg-amber-400 rounded'> <a href={`/alltours`}>Previous</a></button>
                    </div>

                    <div className="text-heading text-3xl font-bold">
                        <h1>Add Destination point</h1>
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
                                    <h3 className='text-xl mb-2 flex items-center justify-between'><span>Destination Point 1</span> <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point1 m1`} placeholder='Point name' className='boxinput w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point1 m2`} placeholder='Point Latitude' className='boxinput w-[220px] h-[45px] ml-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point1 m3`} placeholder='Point Longitude' className='boxinput w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point1 m4`} placeholder='Small description' className='boxinput w-[220px] h-[45px] p-2 ' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between'>Destination Point 2 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point2 m1`} placeholder='Point name' className='boxinput w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point2 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2 ' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point2 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point2 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2 ' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between'>Destination Point 3 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point3 m1`} placeholder='Point name' className='boxinput w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point3 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point3 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point3 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between '>Destination Point 4 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point4 m1`} placeholder='Point name' className='boxinput  w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point4 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point4 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point4 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between'>Destination Point 5 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point5 m1`} placeholder='Point name' className='boxinput  w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point5 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point5 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point5 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between'>Destination Point 6 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point6 m1`} placeholder='Point name' className='boxinput  w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point6 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point6 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point6 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between'>Destination Point 7 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point7 m1`} placeholder='Point name' className='boxinput  w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point7 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point7 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point7 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2 flex items-center justify-between'>Destination Point 8 <span id='err' className='err text-red-500 me-1'></span></h3>
                                    <input type="text" name={`point8 m1`} placeholder='Point name' className='boxinput  w-[220px] h-[45px] p-2 me-3' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point8 m2`} placeholder='Point Latitude' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check2(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point8 m3`} placeholder='Point Longitude' className='boxinput  w-[220px] h-[45px] mx-3 p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check3(e.target.value, e.target.name); }} />
                                    <input type="text" name={`point8 m4`} placeholder='Small description' className='boxinput  w-[220px] h-[45px] p-2' onChange={handleChange} style={borStyle} onKeyUp={(e) => { Check4(e.target.value, e.target.name); }} />
                                </div>

                                <div className="box-input-row  mb-4">
                                    <h3 className='text-xl mb-2'>Destination Points PDF</h3>
                                    <input type="file" id="" name={`pdf`} onChange={(e) => {
                                        setfile(e.target.files[0])
                                    }} accept=".pdf" />
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

export default AddDesPoint