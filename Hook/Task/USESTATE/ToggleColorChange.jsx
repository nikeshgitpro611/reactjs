import React from "react";

const ToggleColorChange = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handelChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  const themStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "10px",
    textAlign: "center",
  };
  console.log(isDarkMode);
  return (
    <>
      <h2 style={themStyle}>Toogle Color change..</h2>
      <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={handelChange}>💥</button>
    </>
  );
};

export default ToggleColorChange;
