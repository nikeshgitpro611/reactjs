import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Create [name of restaurant, star Rating, cuisines, delay Times]
// Filter by search button..
// toprated restorent filter by rating

const RestoCard = ({ allGetData }) => {
  const [dataPass, setDataPass] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    if (allGetData?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
      const data = allGetData.groupedCard.cardGroupMap.REGULAR.cards.flatMap(
        (cardGroup) =>
          cardGroup.card?.card?.itemCards?.map((itemCard) => ({
            name: itemCard.card?.info?.name,
            price: itemCard.card?.info?.price,
            ratings: itemCard.card?.info?.ratings?.aggregatedRating?.rating,
            imageId: itemCard.card?.info?.imageId,
            description: itemCard.card?.info?.description,
            id: itemCard.card?.info?.id
          })) || []
      );
      setDataPass(data);
      setFilteredRestro(data);
    }
  }, [allGetData]);

  const handleFilter = () => {
    const filterSearchData = dataPass.filter((nameFilter) =>
      nameFilter.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredRestro(filterSearchData);
  };

  const topRated =  () => {
    const filterRate = filteredRestro.filter(topRatedData=> topRatedData.ratings > 4)
    setFilteredRestro(filterRate)
  }
  console.log('allGetData', allGetData);
  
  let showUiBodyData = (
    <>
      <div className="searchBar" style={{display: 'flex', flexDirection:'row'}}>
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={handleFilter}>Search</button>
        <button onClick={topRated}>Top Rated Restaurants</button>
      </div>

      {filteredRestro.map((dataAll, index) => (
        <Link to = {`/restorent/${dataAll.id}`} key={index}> 
        <div className="res_Card" key={index}>
          <img
            className="card_logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${dataAll.imageId}`}
            alt="card-logo"
          />
          <p>{dataAll.id}</p>
          <h5>{dataAll.name}</h5>
          <p style={{ fontFamily: "revert" }}>
            {dataAll.description?.slice(0, 100)}
          </p>
          <div className="res_card_ratingParent">
            <p
              style={{
                border: "1px solid green",
                paddingRight: "4px",
                backgroundColor: "gray",
                color: "whitesmoke",
                display: "flex",
              }}
            >
              ⭐{dataAll.ratings || 1.5}
            </p>
            <h4>₹{dataAll.price / 100}</h4>
            <h4>38 min</h4>
          </div>
        </div>
        </Link>
      ))}
    </>
  );

  return <>{dataPass.length > 0 && showUiBodyData}</>;
};

export default RestoCard;
