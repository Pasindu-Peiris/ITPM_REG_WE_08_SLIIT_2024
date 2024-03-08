import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Img from '../../Images/top-bg.jpg';
import MenuBurgerImg from '../../Images/menu-burger.png';

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <img src={Img} alt="Mountain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: '40px', left: '40px', zIndex: 1 }}>
        <img 
          src={MenuBurgerImg} 
          alt="Menu" 
          style={{ width: '40px', height: '40px', cursor: 'pointer' }} 
          onClick={handleShow} 
        />
      </div>

      <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: 'black', width: '200px' }}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: 'black', color: 'white', fontSize: '18px' }}>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Dashboard</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Tours</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Client</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Review</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Contact Us</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Request Tour</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Blog</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#FFAF19', color: 'white', marginBottom: '15px' }}>Booking</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Dashboard;
