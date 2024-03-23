import React from 'react';

const Dashboard = () => {
  // Inline CSS for styles
  const containerStyle = {
    padding: '3rem'
  };

  const listItemStyle = {
    backgroundColor: '#fcb900', // Background color for list items
    transition: 'background-color 0.3s, color 0.3s',
    borderRadius: '0.25rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    border: '1px solid #fcb900' // Add card outline color
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000' // Set link color to black
  };

  const hoverStyle = {
    backgroundColor: '#c98300',
    color: '#fff'
  };

  return (
    <div className="container-fluid h-100" style={containerStyle}>
      <div className="row h-100">
        <div className="col-md-2">
          <div className="card h-100 p-2">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title font-weight-bold" style={{ fontSize: '1.5rem' }}>Admin Dashboard</h5>
              <ul className="list-group">
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="#" style={linkStyle}>Dashboard</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="/AllTours" style={linkStyle}>Tours</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="/AllContactUs" style={linkStyle}>Contact Us</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="/AllBlog" style={linkStyle}>Blog</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="/bookings" style={linkStyle}>Booking</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="/AddVirtualTour" style={linkStyle}>360 View</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="/ClientsDetails" style={linkStyle}>Client</a>
                </li>
                <li className="list-group-item my-2" style={{ ...listItemStyle, ...hoverStyle }}>
                  <a className="nav-link font-weight-bold" href="#" style={linkStyle}>Review</a>
                </li>
              </ul>
            </div>
            <div className="card-footer mt-auto"> {/* Card footer to align the button */}
              <button className="btn btn-danger">Logout</button> {/* Logout button */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
