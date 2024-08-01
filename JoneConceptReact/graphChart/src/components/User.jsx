import React from "react";
import styled from "styled-components";
import Followers from "./Followers";
import Card from "./Card";

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  background-color: aliceblue;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default User;
