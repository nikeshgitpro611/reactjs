import React from "react";
import loginImg from "../images/login-img.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github User" />
        <h2>github user's</h2>
        <Link className="btn">login</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container{
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img{
    margin-bottom: 2rem;
  }
  h1{
    margin-bottom: 1rem;
  }
`;
export default Login;
