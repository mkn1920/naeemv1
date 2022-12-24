import React from 'react';
import styled from 'styled-components';

const InterestsStyled = styled.section`
  grid-area: interests;
  line-height: 1.7;
`;

const Interests = () => {
  return (
    <InterestsStyled id="interests">
      <h2>Interests</h2>
      <ul>
        <li>Web Development</li>
        <li>Artificail intelligence</li>
        <li>Machine Learning</li>
      </ul>
    </InterestsStyled>
  );
};

export default Interests;
