import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {};

const CirclesContainer = styled.div`
  .circles--container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  .common {
    position: absolute;
    border-width: 1px;
    border-radius: 9999px;
    border: 1px solid #565656;
    height: 200px;
    aspect-ratio: 1;
    margin-top: 52px;
  }

  .anim-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .anim-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .c-2 {
    height: 300px;
  }

  .c-3 {
    height: 500px;
  }

  .c-4 {
    border-color: var(--color-accent);
    height: 650px;
  }

  .c-5 {
    height: 800px;
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`;

const BackgroundCircles = (props: Props) => {
  return (
    <CirclesContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80", "20%"],
        }}
        transition={{ duration: 2.5 }}
        className="circles--container"
      >
        <div className="common anim-ping" />
        <div className="common c-2" />
        <div className="common c-3" />
        <div className="common c-4 anim-pulse" />
        <div className="common" />
        <div className="common c-5" />
      </motion.div>
    </CirclesContainer>
  );
};

export default BackgroundCircles;
