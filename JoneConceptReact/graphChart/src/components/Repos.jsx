import React, { useContext } from "react";
import { GuthubContext } from "../context/context";
import styled from "styled-components";
import { Bar3D, Column3D, Doughnut2D, ExampleChart, Pie3D } from "./Charts";

const Repos = () => {
  const { gitHubRepo } = useContext(GuthubContext);
  console.log("gitHubRepo : ", gitHubRepo);
  const chartData = [
    {
      label: "HTML",
      value: "100"
    },
    {
      label: "JavaScript",
      value: "20"
    },
    {
      label: "CSS",
      value: "20"
    },
    
  ];

 
  
  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Bar3D data={ chartData}/>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section``;

export default Repos;
