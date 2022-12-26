// IMPORTS ////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { BsMailbox2 } from "react-icons/bs";
import { Spin as Hamburger } from "hamburger-react";

import NavLink from "./nav-link";
import NavIconLink from "./nav-icon-link";

// STYLES /////////////////////////////////////////////////////////////////////

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
    transition: transform 0.2s;
  }

  &:hover::before,
  &:focus::before {
    transform-origin: 50% 50%;
    transform: scale3d(1, 1, 1);
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  visibility: ${({ navOpen }) => (navOpen ? "visible" : "hidden")};
  opacity: ${({ navOpen }) => (navOpen ? 1 : 0)};
  transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    visibility 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  background-color: var(--bg-blue);
  font-size: 1.375rem;

  a {
    color: var(--light);
    text-decoration: none;
    font-weight: 0;
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  ul {
    width: max-content;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    list-style-type: none;

    li {
      ${underlineHoverTransition}
    }
  }

  .text-links-list {
    margin: 0;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    transform: scale(1);

    a:hover {
      color: var(--accent);
    }
  }

  .icon-links-list {
    flex-direction: row;
    font-size: 2rem;

    a * {
      display: block;
    }
    a:hover {
      color: var(--accent);
    }
  }

  @media (min-width: 64em) {
    z-index: 0;
    height: max-content;
    position: static;
    padding: 1.5em 2em;

    flex-direction: row;
    justify-content: space-between;

    visibility: visible;
    opacity: 1;

    background: none;

    a {
      font-size: 1rem;
      color: ${({ navColor }) => (navColor ? navColor : "var(--light)")};
      font-weight: bold;
    }

    .text-links-list {
      flex-direction: row;
    }

    .icon-links-list {
      svg {
        font-size: 2rem;
      }
    }
  }
`;

const Heading = styled.h1`
  margin: 0;
  a {
    font-family: ;
    font-size: 3rem;
    color: var(--accent);
    @media (min-width: 64em) {
      font-size: 3rem;
    }
  }
  a:hover {
    color: white;
  }

  ${underlineHoverTransition}
`;

const StyledHamburger = styled.div`
  position: fixed;
  z-index: 1;
  top: 1em;
  left: 1em;

  @media (min-width: 64em) {
    display: none;
    color: var(--accent);
  }
`;

// COMPONENTS /////////////////////////////////////////////////////////////////

const NavSection = ({ siteTitle, color, navColor }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Nav navOpen={navOpen} navColor={navColor}>
        <Heading onClick={() => setNavOpen(!navOpen)}>
          <Link to="/#landing">{siteTitle}</Link>
        </Heading>

        <ul className="text-links-list">
          <NavLink link="/#projects" navOpen={navOpen} setNavOpen={setNavOpen}>
            Projects
          </NavLink>

          <NavLink link="/#about" navOpen={navOpen} setNavOpen={setNavOpen}>
            About
          </NavLink>

          <NavLink link="/#contact" navOpen={navOpen} setNavOpen={setNavOpen}>
            Contact
          </NavLink>

          <NavLink link="/resume/" navOpen={navOpen} setNavOpen={setNavOpen}>
            Resume
          </NavLink>
        </ul>
        <ul className="icon-links-list">
          <NavIconLink
            link="https://www.github.com/mkn1920"
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          >
            <RiGithubFill />
          </NavIconLink>

          <NavIconLink
            link="https://www.linkedin.com/in/mohammad-naeem-naseri-a64184206"
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          >
            <RiLinkedinBoxFill />
          </NavIconLink>

          <NavIconLink
            link="mailto:mkn1920@icloud.com"
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          >
            <BsMailbox2 />
          </NavIconLink>
        </ul>
      </Nav>
      <StyledHamburger>
        <Hamburger
          toggled={navOpen}
          toggle={setNavOpen}
          rounded
          label="Show menu"
          color={navOpen ? "#FFF" : color}
        />
      </StyledHamburger>
    </>
  );
};

NavSection.propTypes = {
  siteTitle: PropTypes.string,
};

NavSection.defaultProps = {
  siteTitle: ``,
};

export default NavSection;
