import React from "react";

//Creat[name of res,star Rating, cusins, delay Times]
const RestoCard = ({allGetData}) => {
  console.log('getData : ', allGetData);
  
  return (
    <div className="res_Card">
      <img
      className="card_logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/8/09d27322-ce6b-4de3-8e54-2d959186ce8b_PCTilePCTile2.png"
        alt="card-logo"
      />
      <h3>Megna Food</h3>
      <h4>Megna, Food, Lorem.</h4>
      <h4>4.5 Start</h4>
      <h4>38 min</h4>
    </div>
  );
};

export default RestoCard;
