import axios from "axios";

export const BaseUrlGet = "http://localhost:5000/api/v1/tasks";
export const FetchFormApi = async (url) => {
  console.log("url ", url);

  try {
    const responce = await axios.get(url);
    const dataGet = responce?.data?.data;
    // console.log('dataGet : ', dataGet);

    return dataGet;
  } catch (error) {
    console.log("Error : ", "Some thing Wrong");
  }
};

export const FetchDeleteData = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/tasks/${id}`
    );
    console.log("Delete successful:", response.data);
    return response.data;
    // You can add any additional action after successful deletion, like updating the UI or state.
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const FetchApiInsert = async (name) => {
  // console.log("insertInput : ", name);

  try {
    const responce = await axios.post(`http://localhost:5000/api/v1/tasks`, {
      name,
    });
    // console.log("Responce : ", responce);
    return responce?.data?.data;
  } catch (error) {
    console.log("Error : ", error.message);
  }
};

export const FetchApiForEdit = async (id, name) => {
  const responce = await axios.patch(
    `http://localhost:5000/api/v1/tasks/${id}`,
    { name }
  );
  console.log("test:", responce?.data);

  return responce?.data?.data;
};

export const FetchApiForJwtToken = async (username, password) => {
  console.log(username, password);

  const responce = await axios.post("http://localhost:3002/api/jwt/login", {
    username,
    password,
  });
  console.log("responce : ", responce.data);
  return responce?.data;
};
export const FetchJwtGet = async () => {
  const token = localStorage.getItem('token')
  const responce = await axios.get("http://localhost:3002/api/jwt/dashboard", {
    headers: {
      Authorization : `Bearer ${token}`
    },
  });
  return responce?.data
};
