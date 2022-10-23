import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { EnterFromLeft, EnterFromRight } from "../../../util/FramerMotion";
import {
  FramerMotionIcon,
  GatsbyIcon,
  GraphQLIcon,
  JestIcon,
  NetlifyIcon,
  ReactOriginalIcon,
  ReactTestingLibraryIcon,
  StyledComponentsIcon,
  TypescriptIcon,
} from "../../../util/Logos";
import AnimatedImage from "./AnimatedImage";
import TechnologyLogo from "./TechnologyLogo";

type Props = {};

const ShowcaseProject = (props: Props) => {
  if (typeof window === `undefined`) {
    return <></>;
  }
  const { height, width } = useWindowDimensions();

  return (
    <ShowcaseContainer>
      <motion.div {...EnterFromLeft(0)} className="text-container">
        <h3>Portfolio</h3>
        <h4>
          The website I created as a digital portfolio. Made with the following
          and a lot of love ♥
        </h4>
        <h6 className="no-hover-prompt">
          Psst. You can click and hold to see what they are 😉
        </h6>
        <div className="logos-container">
          <TechnologyLogo image={TypescriptIcon} logoText="Typescript" />
          <TechnologyLogo image={ReactOriginalIcon} logoText="React" />
          <TechnologyLogo image={GatsbyIcon} logoText="Gatsby" />
          <TechnologyLogo
            image={StyledComponentsIcon}
            logoText="Styled Components"
          />
          <TechnologyLogo image={FramerMotionIcon} logoText="Framer Motion" />
          <TechnologyLogo image={GraphQLIcon} logoText="Graph QL" />
          <TechnologyLogo
            image={ReactTestingLibraryIcon}
            logoText="React Testing Library"
          />
          <TechnologyLogo image={JestIcon} logoText="Jest" />
          <TechnologyLogo image={NetlifyIcon} logoText="Netlify" />
        </div>
      </motion.div>
      <motion.div
        {...EnterFromRight(0)}
        className={`${(width || 0) < 500 ? "shrink" : ""}`}
      >
        <AnimatedImage
          scrollHeight={7500}
          canvasWidth={444}
          canvasHeight={872}
          numFrames={77}
        />
      </motion.div>
    </ShowcaseContainer>
  );
};

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  height: max-content;
  position: relative;
  text-align: center;

  .logos-container {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    margin: 4vh;
    justify-content: center;
    align-items: center;
    place-items: center;
  }

  .text-container {
    max-width: 60vw;
    margin-bottom: 10vh;
  }

  .shrink {
    canvas {
      scale: 0.7;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .text-container {
      position: sticky;
      top: 40%;
      left: 0%;
      height: max-content;
      max-width: 30vw;
    }
  }

  @media not (hover: none) {
    .no-hover-prompt {
      opacity: 0;
    }
  }
`;

export default ShowcaseProject;
