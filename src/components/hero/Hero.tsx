import { motion } from "framer-motion";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styled from "styled-components";
import { FontSizes } from "../../util/FontSizes";
import BackgroundCircles from "./components/BackgroundCircles";
import ScrollPrompt from "./components/ScrollPrompt";

type Props = {};

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  /* margin-top: -100px; */
  position: relative;
  padding-bottom: 5vh;

  header {
    position: absolute;
  }

  .hero--heading {
    letter-spacing: -5px;
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-hero-heading);
    line-height: 144px;

    > h1 {
      display: inline-block;
    }
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

  @media screen and (max-width: 1024px) {
    .hero--heading {
      font-size: 64px;
      line-height: 64px;
    }
  }
`;

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Student by day, creative frontend developer by later day.",
      "Could probably be found coding right now...",
      "Guy who knows how to center a div 😎",
      "You've been here a while. Cup of tea?",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 15,
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
        transition={{ duration: 1, delay: 1.8 }}
      >
        <h1 className="hero--heading">
          <h1
            className={forenameHovered ? "highlighted" : ""}
            onMouseEnter={() => nameHovered(true)}
            onMouseLeave={() => nameHoverRemoved(true)}
          >
            Bisesh
          </h1>{" "}
          <h1
            className={surnameHovered ? "highlighted" : ""}
            onMouseEnter={() => nameHovered(false)}
            onMouseLeave={() => nameHoverRemoved(false)}
          >
            Sitaula
          </h1>
        </h1>
        <h4>
          <span>{text}</span>
          <Cursor cursorColor="#e0e1dd" />
        </h4>
      </motion.header>
      <BackgroundCircles />
      <ScrollPrompt />
    </HeroContainer>
  );
};

export default Hero;
