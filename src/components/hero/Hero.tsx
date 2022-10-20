import { motion } from "framer-motion";
import React from "react";
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
      "Could probably be found debugging right now...",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <HeroContainer>
      <header>
        <h1 className="hero--heading">Bisesh Sitaula</h1>
        <h2>
          <span>{text}</span>
          <Cursor cursorColor="#e0e1dd" />
        </h2>
      </header>
      <BackgroundCircles />
      <ScrollPrompt />
    </HeroContainer>
  );
};

export default Hero;
