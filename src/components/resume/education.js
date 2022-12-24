import React from 'react';
import styled from 'styled-components';

const EducationStyled = styled.section`
  grid-area: education;
  line-height: 1.7;
`;

const Education = () => {
  return (
    <EducationStyled id="education">
      <h2>Education</h2>
      <ul>
      <li>
          <span>Master of technology</span> - Sharda University, India - August 2019
          - May 2021
        </li>
        <li>
          <span>Bachelor of Science</span> - Kabul Polytechnic University , Afghanistan - 2014
          - 2018
        </li>
        <li>
          <span>The Frontend Developer Career Path</span> - Scrimba - June 2021
          - Present
        </li>
      </ul>
    </EducationStyled>
  );
};

export default Education;
