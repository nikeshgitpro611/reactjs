import React, { useRef, useState } from "react";
import RestoCard from "./RestoCard";
import useFetchApiData from "./Hook/FetchAPI";
import { ApiUrl } from "./utils/contentes";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";

//Search Bar
// Cart[img, restorantname,cusions, prices, timeTake, rating,etc]
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1452&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  const apiData = useFetchApiData(ApiUrl);
  const [searchData, setSearchData] = useState("");
  const [filterRate, setFilterRate] = useState("")
  const searchReff = useRef();
  // console.log("test : ", apiData.getApiData);

  if (apiData.isLoading) {
    // return <h2>🔃 Loading..... 🤖</h2>;
    return <Simmer />;
  }

  

  return (
    <div>
      
      <div className="cardContainer">
        {apiData.getApiData.map((getData, index) => (
         <RestoCard allGetData={getData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
