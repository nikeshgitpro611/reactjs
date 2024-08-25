import React, { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setErrorMsg(error?.error?.message || "An unexpected error occurred");
  }, [error]);

  return (
    <div className="error-container">
      <div>Error ❌ 🙅‍♂️</div>
      <div>{errorMsg}</div>
    </div>
  );
};

export default Error;
