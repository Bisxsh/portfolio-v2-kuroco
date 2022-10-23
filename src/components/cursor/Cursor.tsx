import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring } from "framer-motion";
import MouseContext from "../../util/MouseContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const PointerContainer = styled.div`
  pointer-events: none;
  @media (hover: none) {
    visibility: hidden;
  }
  z-index: 999;
  .inner-circle {
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 100%;
    margin: 8px;
    -webkit-animation: scale-down-center 0.4s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes scale-down-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }
  @keyframes scale-down-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }

  .hovering {
    width: 24px;
    height: 24px;
    margin: 2px;
    opacity: 0.2;
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .cursor {
    position: fixed;
    left: 0;
    top: 0;
    border: 2px var(--color-accent) solid;
    border-radius: 100%;
  }
`;

const Cursor = () => {
  if (typeof window === `undefined`) {
    return <></>;
  }

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 50, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <MouseContext.Consumer>
      {(context) => (
        <PointerContainer data-testid="pointer">
          <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
          >
            <div
              className={`inner-circle ${
                context.mouseHovering ? "hovering" : ""
              }`}
            />
          </motion.div>
        </PointerContainer>
      )}
    </MouseContext.Consumer>
  );
};

export default Cursor;
