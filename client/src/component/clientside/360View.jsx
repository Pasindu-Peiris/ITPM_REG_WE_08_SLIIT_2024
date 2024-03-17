import React from "react";
import Nav from './Nav';
import SphereViewer from "./SphereViewer";
import image from "../../Images/photo1.jpg"
const View = () => {
    return (
      <div>
        <Nav />

        <div className="container">
          <SphereViewer imageUrl={image} />
        </div>
      </div>
    );
}

export default View;