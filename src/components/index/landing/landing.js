// IMPORTS ////////////////////////////////////////////////////////////////////

import React from "react";
import styled from "styled-components";

import LandingBGWrapper from "./landing-bg-wrapper";
import Nav from "../../nav/nav";
import SVGGraphic from "../../../images/svg/sitting-with-laptop.svg";
import CTAButton from "./cta-button";

// STYLES /////////////////////////////////////////////////////////////////////

const LandingSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  grid-area: landing;
  display: grid;
  grid-template-rows: max-content auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75em;

  .svg-graphic {
    width: min(80%, 22em);
  }

  @media (min-width: 64em) {
    height: auto;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0rem;

    .svg-graphic {
      width: 100%;
      max-width: 22.5rem;
    }
  }

  @media (min-width: 90em) {
    .svg-graphic {
      max-width: 30rem;
    }
  }
`;

const HeroHeader = styled.header`
  h1 {
    color: #e6e6e6;
    font-size: 3rem;
    margin: 0;
    line-height: 0.9;
  }

  p {
    color: white;
    font-size: 0.935rem;
    margin: 0;
    letter-spacing: -0.0025em;
  }

  @media (min-width: 64em) {
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.15rem;
    }
  }

  @media (min-width: 90em) {
    h1 {
      font-size: 6rem;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 40px;
    }
  }
`;

const Heading = styled.h1`
  .flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .emoji-wrapper {
      width: max-content;
      font-size: 0.75em;
    }
  }
`;

const SubHeading = styled.p`
  padding-left: 0.4rem;
`;

// COMPONENTS /////////////////////////////////////////////////////////////////

const Landing = () => {
  return (
    <LandingSection id="landing">
      <LandingBGWrapper>
        <Nav siteTitle="<Naeem>" color="#393939" />
        <Content>
          <HeroText />
          <SVGGraphic />
          <CTAButton />
        </Content>
      </LandingBGWrapper>
    </LandingSection>
  );
};

export default Landing;

const HeroText = () => (
  <HeroHeader>
    <Heading>
      <span className="flex-container">
        Hello{" "}
        <span role="img" aria-label="sparkles" className="emoji-wrapper"></span>
      </span>
      <span style={{ display: "block" }}>I am Naeem</span>
    </Heading>
    <SubHeading>
      <em>I design &amp; develop quality software for the web.</em>
    </SubHeading>
  </HeroHeader>
);
