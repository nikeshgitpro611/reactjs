import { useEffect, useState } from "react";

const useFetchApiData = (url) => {
  
  const [getApiData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetApi = async () => {
    setIsLoading(true)
    const responnce = await fetch(url);
    console.log('responnce', responnce);
    
    const json = await responnce.json();
    setGetData(json.data.cards);
    setIsLoading(false)
  };

  useEffect(() => {
    fetApi();
  }, [url]);
//   console.log("getApiData : ", getApiData);

  return {getApiData, isLoading};
};
export default useFetchApiData;
