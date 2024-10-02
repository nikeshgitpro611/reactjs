import axios from "axios";

export const FormatDate = (dateStr) => {
  const [month, day, year] = dateStr.split("/").map((num) => parseInt(num, 10));
  return {
    date: `${month}/${day}/${year}`,
    month: month.toString(), // Convert month to string explicitly, though it's not necessary in template literals
  };
};

export const postData = async (url, data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const res = await axios.post(url, data, { headers });
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
      console.error("Server Status:", error.response.status);
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    throw error; // Re-throw the error to handle it in the calling function if necessary
  }
};

export const getData =  async (url) => {
  try {
    const responce = await axios.get(url);
    return responce.data
    console.log(responce.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}