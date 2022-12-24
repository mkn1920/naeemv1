import React from 'react';
import styled from 'styled-components';

const WorkHistoryStyled = styled.section`
  grid-area: work-history;

  .mt-1 {
    margin-top: 1.5em;
  }
`;

const Title = styled.span`
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 1px;
  text-decoration-color: var(--accent);
`;

const WorkHistory = () => {
  return (
    <WorkHistoryStyled id="work-history">
      <h2>Work history</h2>
      <ul>
        <li className="mt-1">
          <Title>Web Developer</Title> at
          Knight Software Development Company Afghanistan - Feb 2017 - Feb 2018
          <ul>
            <li>
            Requirement gathering
            </li>
            <li>Front-End Web Development for websites using HTML, CSS, JS, Bootstrap, jQuery.
            </li>
          </ul>
        </li>
        <li className="mt-1">
          <Title>Junior Web Developer</Title> at Knight Software Company - Afghanistan 2016 – 2017

        </li>
        <li className="mt-1">
          <Title>Social Media Manager &amp; Content Curator</Title> at Coaching
          Psychology Online - 2017–2018
        </li>
      </ul>
    </WorkHistoryStyled>
  );
};

export default WorkHistory;
