import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Img from "../../Images/hp-blog-bg.jpg";
import LocIcon from '../../Images/loc.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditDes = () => {


  function Notify(mes) {
    toast.success(mes, {
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
    toast.error("Faild", {
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

  const [listPoints, setListPoints] = useState([]);

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

      setListPoints(response.data)
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
    height: "120vh",
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
  };

  const style = {
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"

  }

  const handleDelete = () => {
    axios.delete('http://localhost:8090/dest/deletedest/' + id).then(() => {
      let mess = "Deleted successfully"
      Notify(mess)
      setTimeout(function () {
        window.location.href = "/alltours";
      }, 2000); // 2000 milliseconds (2 seconds) 
    }).catch((err) => {
      Notify2()
    })
  }

  return (
    <div className=' ' style={addImg} >

      <div className="heading w-[85%] h-[15vh] bg-white place-items-start mx-auto mt-5 flex items-center justify-between">
        <h1 className=' text-4xl fw-bold'>Destination Points</h1>
        <div className="box">
          <button className='btn btn-success p-2 me-3 rounded text-white'><a href={`/map2/${listPoints.trid}`} className='text-white'>View Map</a></button>
          <button className='btn btn-primary p-2 me-5 rounded text-white'><a href={`/updatedes/${listPoints.trid}`} className='text-white'>Update</a></button>
          <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-danger bg-red-600 p-2 rounded text-white' >Delete</button>
        </div>
      </div>

      <div className="box d-flex align-middle justify-center items-center">
        <table class="table w-[85%] h-[auto] bg-white rounded table-bordered table-striped table-hover" style={style}>
          <thead class="table-dark rounded">
            <tr className='text-xl rounded p-4'>
              <th className='p-3' scope="col">Point name </th>
              <th className='p-3' scope="col">Destination name</th>
              <th className='p-3' scope="col">Latitude</th>
              <th className='p-3' scope="col">Longitude</th>
              <th className='p-3' scope="col">Description</th>
              <th className='p-3' scope="col">PDF file</th>

            </tr>
          </thead>
          <tbody class="table-group-divider rounded">
            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 1 </span> </td>
              <td className='p-3'>{p1[0]}</td>
              <td className='p-3'>{p1[1]}</td>
              <td className='p-3'>{p1[2]}</td>
              <td className='p-3'> {p1[3]}</td>
              <td rowSpan={8} className=' flex justify-center items-center text-center p-3'><button className=' p-1 text-blue-50 bg-blue-600 rounded'><a className=' text-white' href={`http://localhost:8090/Upload/images/` + listPoints.pdf} download>Download</a></button></td>
            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 2 </span></td>
              <td className='p-3'>{p2[0]}</td>
              <td className='p-3'>{p2[1]}</td>
              <td className='p-3'>{p2[2]}</td>
              <td className='p-3'> {p2[3]}</td>

            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 3 </span></td>
              <td className='p-3'>{p3[0]}</td>
              <td className='p-3'>{p3[1]}</td>
              <td className='p-3'>{p3[2]}</td>
              <td className='p-3'> {p3[3]}</td>

            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 4 </span></td>
              <td className='p-3'>{p4[0]}</td>
              <td className='p-3'>{p4[1]}</td>
              <td className='p-3'>{p4[2]}</td>
              <td className='p-3'> {p4[3]}</td>

            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 5 </span></td>
              <td className='p-3'>{p5[0]}</td>
              <td className='p-3'>{p5[1]}</td>
              <td className='p-3'>{p5[2]}</td>
              <td className='p-3'> {p5[3]}</td>

            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 6 </span></td>
              <td className='p-3'>{p6[0]}</td>
              <td className='p-3'>{p6[1]}</td>
              <td className='p-3'>{p6[2]}</td>
              <td className='p-3'> {p6[3]}</td>

            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 7 </span></td>
              <td className='p-3'>{p7[0]}</td>
              <td className='p-3'>{p7[1]}</td>
              <td className='p-3'>{p7[2]}</td>
              <td className='p-3'> {p7[3]}</td>

            </tr>

            <tr className='text-xl p-4 '>
              <td className='p-3'><span className='flex items-center justify-center'><img src={LocIcon} alt="" width={35} className='me-3' /> Point 8 </span></td>
              <td className='p-3'>{p8[0]}</td>
              <td className='p-3'>{p8[1]}</td>
              <td className='p-3'>{p8[2]}</td>
              <td className='p-3'> {p8[3]}</td>

            </tr>


          </tbody>
        </table>
      </div>
      <ToastContainer />



      


      <div class="modal fade" style={{ backgroundColor: "#0b0b0b58" }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style={{ backgroundColor: "", textAlign: "center", justifyContent: "space-between", display: "flex" }}>
              <h1 class="modal-title fs-5" id="exampleModalLabel">Destination Points Delete</h1>
              
            </div>
            <div class="modal-body">
              <p className='text-xl'>Are your Sure , You need to delete this?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="p-2 text-white rounded bg-blue-600" data-bs-dismiss="modal">Close</button>
              <button type="button" class="p-2 text-white rounded  bg-red-600" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default EditDes