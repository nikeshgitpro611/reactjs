import axios from "axios";
const Base_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: Base_URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: "100",
  },
  headers: {
    'x-rapidapi-key': '1cdf64bae7mshe15008151f004afp12d7b9jsn59ee117e3dda',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
  // headers: {
  //   "x-rapidapi-key": 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
  //   'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    
  // },
};

export const FetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${Base_URL}/${url}`, options)
    return response.data
  } catch (error) {
    console.error(error);
  }
};

// const apiUrl = "https://11lasqtexd.execute-api.us-west-2.amazonaws.com/dev/eventLableAccuracy/test";

export const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    
    // Check if the response is successful (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON response
    console.log("data", data); // Log the data (or use it in your app)

  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors
  }
};

// Call the function to fetch data
