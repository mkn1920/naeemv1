import React from 'react';
import styled from 'styled-components';

import LeftSVGGraphic from '../../../images/svg/standing-infront-webpage.svg';
import RightSVGGraphic from '../../../images/svg/sitting-behind-laptop.svg';
import AboutBGWrapper from './about-bg-wrapper';

const AboutSection = styled.section`
  position: relative;
  width: 100vw;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 4.25rem;
  color: var(--bg-purple);

  @media (min-width: 64em) {
    font-size: 6rem;
    
  }
`;

const SubContent = styled.div`

  padding:0 10px;

  article {
    font-size: 1.35rem;
    padding: 0 4em;
    line-height: 1.6;
  }

  .left-svg-graphic {
    display: none;

  }

  .right-svg-graphic {
    display: none;
  }

  @media (min-width: 48em) {
    max-width: min(80vw, 60rem);

    display: grid;
    grid-template-columns: max-content 30vw;
    align-items: center;
    justify-content: center;
    gap: 1vw;

    p {
      max-width: 35vw;
      font-size: 1.25rem;
    }

    .right-svg-graphic {
      display: block;
      width: 100%;
    }
  }

  @media (min-width: 64em) {
    grid-template-columns: 25vw max-content 25vw;

    .left-svg-graphic {
      display: block;
      width: 100%;
      margin-bottom: 20em;
    }

    p {
      max-width: 30vw;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutBGWrapper>
        <Content>
          <Heading>About</Heading>
          <SubContent>
            <LeftSVGGraphic />
            <article>
              <p>
                I&apos;m a software engineer who is looking to start my
                journey as a Frontend developer.
              </p>
              <p>
                I&apos;m a self-motivated learner with strong organisation, time
                management &amp; communication skills.
              </p>
              <p>
                I&apos;m able to work independently &amp; collaboratively in a
                team with a meticulous attention to detail.
              </p>
            </article>
            <RightSVGGraphic />
          </SubContent>
        </Content>
      </AboutBGWrapper>
    </AboutSection>
  );
};

export default About;
