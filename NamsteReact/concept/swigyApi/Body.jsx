import React from "react";
import RestoCard from "./RestoCard";
import useFetchApiData from "./Hook/FetchAPI";
import { ApiUrl } from "./utils/contentes";

//Search Bar
// Cart[img, restorantname,cusions, prices, timeTake, rating,etc]
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1452&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
const Body = () => {
  const apiData = useFetchApiData(ApiUrl);
  console.log("test : ", apiData.getApiData);

  if (apiData.isLoading) {
    return <h2>🔃 Loading..... 🤖</h2>;
  }

  return (
    <div>
      <div className="serachBar">
        <input type="text" />
        <button>Search Me.</button>
      </div>
      <div className="cardContainer">
        {apiData.getApiData.map((getData,index) => (
          <RestoCard allGetData={getData} key={index}/>
        ))}
        {/* <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard /> */}
      </div>
    </div>
  );
};

export default Body;
