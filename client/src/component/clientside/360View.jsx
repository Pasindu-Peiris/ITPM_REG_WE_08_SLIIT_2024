import React from "react";
import Nav from './Nav';
import SphereViewer from "./SphereViewer";
import image from "../../Images/photo3.jpg"
import Footer from "./Hfotter";
import '../CSS/style.css'
const View = () => {
    return (
      <div>
        <Nav />

        <div className="main-container" >
          <SphereViewer imageUrl={image} />
        </div>
        <Footer />
      </div>
    );
}

export default View;