import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { EnterFromLeft, EnterFromRight } from "../../util/FramerMotion";
import { animateScroll as scroll } from "react-scroll";
import Hamburger from "hamburger-react";
import MenuOption from "./components/MenuOption";
import MouseContext, { mouseEntered, mouseLeft } from "../../util/MouseContext";

type Props = {
  blackBackground: boolean;
  showNavbar: boolean;
};

const NavbarContainer = styled.div<{
  $blackBackground?: boolean;
  $showNavbar?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  padding: 40px max(50px, 4vw);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 21;
  background: ${(props) =>
    props.$blackBackground ? "black" : "var(--color-bg)"};
  border-radius: 0 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  opacity: 0.8;
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 10px;
  max-height: 10vh;

  opacity: ${(props) => (props.$showNavbar ? 100 : 0)};
  transform: ${(props) =>
    props.$showNavbar ? "translateY(-1vh)" : "translateY(-1vh)"};

  .logo {
    width: max(40px, 3vw);
    height: max(40px, 3vw);
    cursor: pointer;

    :hover {
      -webkit-animation: jello-horizontal 0.9s both;
      animation: jello-horizontal 0.9s both;
    }
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
    transform: translate(-85%, -13%);
    padding: 40px;
    width: max-content;
    background-color: var(--color-bg);
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: var(--color-gradient-hor);
  }

  @-webkit-keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  .link {
    text-decoration: none;
    color: var(--color-text);
    margin: 10px 20px 0 0;

    display: inline-block;
    position: relative;
    cursor: pointer;

    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-accent);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    :hover,
    :active {
      .link-text {
        font-weight: 800;
        background: var(--color-gradient-hor);
        background-clip: border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    }
  }

  .link-number {
    display: inline-block;
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
  const { setMouseHovering } = useContext(MouseContext);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <NavbarContainer
      $blackBackground={props.blackBackground}
      $showNavbar={props.showNavbar}
    >
      <div
        className="logo-container"
        onClick={scrollToTop}
        onMouseEnter={() => mouseEntered(setMouseHovering)}
        onMouseLeave={() => mouseLeft(setMouseHovering)}
      >
        <StaticImage src="./assets/logo_gray.png" alt="logo" className="logo" />
      </div>

      <div className="hamburgur-container">
        {(width || 0) < 1024 && (
          <motion.div className="hamburgur-menu" {...EnterFromRight({})}>
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </motion.div>
        )}
        {menuOpen && (
          <NavContainer className={(width || 0) > 1024 ? "" : "hamburgur"}>
            <li>
              <MenuOption number={1} label="About" link="about" />
            </li>
            <li>
              <MenuOption number={2} label="Experience" link="experience" />
            </li>
            <li>
              <MenuOption number={3} label="Projects" link="projects" />
            </li>
            <li>
              <MenuOption number={4} label="Contact" link="contact" />
            </li>
          </NavContainer>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
