import React from "react";
import useFetchApiData from "../Hook/FetchAPI";
import Simmer from "../Simmer";

const RestorentMenu = () => {
  const { isLoading, getApiData } = useFetchApiData(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=5938&catalog_qa=undefined&query=Crispy%20Veg%20Burger&submitAction=ENTER"
  );

  console.log(getApiData);

  if (isLoading) {
    return <Simmer />;
  }

  return <div>RestorentMenu</div>;
};

export default RestorentMenu;
