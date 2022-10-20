import { motion } from "framer-motion";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styled from "styled-components";
import BackgroundCircles from "./components/BackgroundCircles";
import ScrollPrompt from "./components/ScrollPrompt";

type Props = {};

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  margin-top: -100px;
  position: relative;

  header {
    position: absolute;
  }

  .hero--heading {
    letter-spacing: -5px;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 144px;
  }

  .highlighted {
    :hover,
    :active {
      font-weight: 800;
      background: var(--color-gradient-hor);
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }

  :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2rem * var(--tw-space-y-reverse));
  }
`;

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Student by day, creative frontend developer by later day.",
      "Guy who knows how to center a div 😎",
      "Could probably be found coding right now...",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [forenameHovered, setForenameHovered] = useState(false);
  const [surnameHovered, setSurnameHovered] = useState(false);

  function nameHovered(forename: boolean) {
    if (forename) {
      setForenameHovered(true);
      return;
    }
    setSurnameHovered(true);
  }

  function nameHoverRemoved(forename: boolean) {
    if (forename) {
      setForenameHovered(false);
      return;
    }
    setSurnameHovered(false);
  }

  return (
    <HeroContainer>
      <motion.header
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h1 className="hero--heading">
          <span
            className={forenameHovered ? "highlighted" : ""}
            onMouseEnter={() => nameHovered(true)}
            onMouseLeave={() => nameHoverRemoved(true)}
          >
            Bisesh{" "}
          </span>
          <span
            className={surnameHovered ? "highlighted" : ""}
            onMouseEnter={() => nameHovered(false)}
            onMouseLeave={() => nameHoverRemoved(false)}
          >
            Sitaula
          </span>
        </h1>
        <h2>
          <span>{text}</span>
          <Cursor cursorColor="#e0e1dd" />
        </h2>
      </motion.header>
      <BackgroundCircles />
      <ScrollPrompt />
    </HeroContainer>
  );
};

export default Hero;
