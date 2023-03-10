import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaDesktop,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const underlineHoverTransition = `
  transition: color 200ms ease-out;
  position: relative;
  white-space: nowrap;

  &::before,
  &::after {
    position: absolute;
    width: 95%;
    height: 2.5px;
    border-radius: 9999px;
    background: var(--accent);
    top: 105%;
    left: 2.5%;
    pointer-events: none;
  }

  &::before {
    content: '';
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  &:hover::before,
  &:focus::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
`;

const ContactDetailsStyled = styled.section`
  grid-area: contact-details;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, max-content);
  grid-template-rows: repeat(6, max-content);
  gap: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;

  svg {
    display: inline;
    vertical-align: top;
    font-size: 1.125rem;

    color: var(--dark);
    transition: color 200ms ease-out;
  }

  @media (min-width: 90em) {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(3, max-content);
  }
`;

const Link = styled.a`
  color: var(--dark);
  text-decoration: none;
  cursor: pointer;

  ${underlineHoverTransition}

  &:hover,
  &:focus {
    svg {
      color: var(--accent);
    }
  }
`;

const ContactDetails = () => {
  return (
    <ContactDetailsStyled>
      <Container>
        <p>
          <Link href="mailto:mkn1920.com">
            <FaEnvelope /> mkn1920@icloud.com
          </Link>
        </p>
        <p>
          <Link href="tel:+919971350767">
            <FaPhoneAlt /> 919971350767
          </Link>
        </p>
        <p>
          <FaHome /> Greatr Noida, India.
        </p>
        <p>
          <Link href="https://www.linkedin.com/in/mohammad-naeem-naseri-a64184206/">
            <FaLinkedin /> Mohammad Naeem Naseri
          </Link>
        </p>
        <p>
          <Link href="https://github.com/mkn1920">
            <FaGithub />
            github.com/mkn1920
          </Link>
        </p>
      </Container>
    </ContactDetailsStyled>
  );
};

export default ContactDetails;
