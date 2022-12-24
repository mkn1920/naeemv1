import * as React from "react";
import styled from "styled-components";

const underlineHoverTransition = `
  transition: color 200ms ease-out;
  position: relative;
  white-space: nowrap;

  &::before,
  &::after {
    position: absolute;
    width: 95%;
    height: 1.5px;
    border-radius: 50%;
    background: var(--light);
    top: 105%;
    left: 2.5%;
    pointer-events: none;
  }

  &::before {
    content: '';
    transform-origin: 50% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  &:hover::before,
  &:focus::before {
    transform-origin: 50% 50%;
    transform: scale3d(1, 1, 1);
  }
`;

const FooterStyled = styled.footer`
  ul {
    position: absolute;
    bottom: 2em;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    grid-gap: 5vw;
    padding: 0;

    li {
      ${underlineHoverTransition}

      a {
        text-align: center;
        text-decoration: none;
        color: var(--light);
        font-size: 1rem;
        // margin-bottom:10px;
      }
    }
  }

  small {
    width: max-content;
    position: absolute;
    bottom: 0.8rem;
    left: 50%;
    transform: translateX(-50%);

    color: var(--light);

    a {
      text-decoration: none;
      color: var(--light);

      ${underlineHoverTransition}
    }

    .logo {
      font-family: "Nanum Pen Script", cursive;
      font-size: 1em;
    }
  }

  @media (max-width: 31.25em) {
    ul {
      grid-template-columns: repeat(4, max-content);
      grid-template-rows: auto;
    }
  }
`;

const Footer = () => (
  <FooterStyled>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/mohammad-naeem-naseri-a64184206"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/mkn1920"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a href="mailto:mkn1920@icloud.com">Email</a>
      </li>
    </ul>
    <small>
      &copy; {new Date().getFullYear()}, Mohammad Naeem Naseri{" "}
      <span role="img" aria-label="love"></span>
      {` `}{" "}
    </small>
  </FooterStyled>
);

export default Footer;
