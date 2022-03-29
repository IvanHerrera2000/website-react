import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar/Navbar";
import home from "assets/home.png";

function Home() {
  return (
    <Section id="home">
      <Navbar />
    </Section>
  );
}

export default Home;

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
`;
