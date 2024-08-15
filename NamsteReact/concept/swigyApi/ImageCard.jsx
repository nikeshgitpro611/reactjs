import React from "react";

const ImageCard = ({image}) => {
    console.log('image : ', ...image);
    
    let passData =   `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image.imageId}`
  return (
    <div style={{ width: "4rem", height: "4rem", padding: "2px solid red" }}>
      <h2>Test</h2>
      <img src= {passData} alt="all Image" />
    </div>
  );
};

export default ImageCard;
