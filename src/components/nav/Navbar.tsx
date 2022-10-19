import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { EnterFromLeft, EnterWithFade } from "../../util/FramerMotion";
import { Link, animateScroll as scroll } from "react-scroll";
import Hamburger from "hamburger-react";

type Props = {};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px clamp(50px, 100%, 2vw);
  max-width: 100vw;

  .logo {
    width: 40px;
    height: 40px;
  }

  .hamburgur-container {
    position: relative;
    z-index: 1;
  }

  .hamburgur {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-85%, -25%);
    padding: 40px;
    width: max-content;
    background-color: var(--color-bg);

    border: 5px solid;
    border-image-slice: 1;
    border-image-source: var(--color-gradient-hor);
  }
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;

  .link {
    text-decoration: none;
    color: var(--color-text);
    margin: 10px 20px 0 0;
  }

  .active {
    font-weight: 800;
    background: var(--color-gradient-hor);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .link-number {
    font-size: var(--font-xs);
    line-height: 16px;
    color: var(--color-grey);
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    .link {
      margin-right: 50px;
      margin-top: 0;
    }
  }
`;

const Navbar = (props: Props) => {
  if (typeof window === `undefined`) {
    return <></>;
  }

  const { height, width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState((width || 0) > 1024 ? true : false);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <NavbarContainer>
      <motion.div
        {...EnterFromLeft({ delay: 0.2 })}
        className="logo-container"
        onClick={scrollToTop}
      >
        <StaticImage src="./assets/logo_gray.png" alt="logo" className="logo" />
      </motion.div>

      <div className="hamburgur-container">
        {(width || 0) < 1024 && (
          <motion.div className="hamburgur-menu" {...EnterWithFade({})}>
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </motion.div>
        )}
        {menuOpen && (
          <NavContainer className={(width || 0) > 1024 ? "" : "hamburgur"}>
            <a href="#link" className="link">
              <span className="link-number">01. </span>&lt;{" "}
              <span className="link-text active">About</span> /&gt;
            </a>
            <a href="#link" className="link">
              <span className="link-number">02. </span>&lt;{" "}
              <span className="link-text">Experience</span> /&gt;
            </a>
            <a href="#link" className="link">
              <span className="link-number">03. </span>&lt;{" "}
              <span className="link-text">Projects</span> /&gt;
            </a>
            <a href="#link" className="link">
              <span className="link-number">04. </span>&lt;{" "}
              <span className="link-text">Contact</span> /&gt;
            </a>
          </NavContainer>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
