import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { EnterWithFade } from "../../util/FramerMotion";
import AboutSection from "./components/AboutSection";

type Props = {};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  height: max-content;

  .boxes-container {
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(1, min(400px, 80vw));
    height: max-content;
    max-width: 90vw;
    place-content: center;
  }

  .background-image {
    visibility: hidden;
  }

  @media screen and (min-width: 860px) {
    .boxes-container {
      display: grid;
      grid-template-columns: repeat(3, 30vw);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }

    .background-image {
      visibility: visible;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
    }
  }

  @media screen and (min-width: 1300px) {
    .boxes-container {
      grid-template-columns: repeat(3, 25vw);
    }
  }

  @media screen and (min-width: 1600px) {
    .boxes-container {
      grid-template-columns: repeat(3, 20vw);
    }
  }

  @media screen and (min-width: 2000px) {
    .boxes-container {
      grid-template-columns: repeat(3, 15vw);
    }
  }
`;

const About = (props: Props) => {
  return (
    <motion.div {...EnterWithFade(0.5)}>
      <AboutContainer>
        <h2 className="section-heading">About me</h2>
        <div className="boxes-container">
          <AboutSection
            image={
              <StaticImage
                className="icon"
                src="./assets/student.svg"
                alt="graduation cap"
              />
            }
            heading="CompSci Student"
            description="Currently in pursuit of a Computer Science Bsc at the University of Bath 🎯"
          />
          <AboutSection
            image={
              <StaticImage
                className="icon"
                src=".\assets\developer.svg"
                alt="graduation cap"
              />
            }
            heading="Software Developer"
            description="An aspiring developer. Learning more about frontend development everyday 👨‍💻"
          />
          <AboutSection
            image={
              <StaticImage
                className="icon"
                src="./assets/designer.svg"
                alt="graduation cap"
              />
            }
            heading="UI/UX Designer"
            description="Passionate about UI/UX design. Every interaction matters 🔍"
          />
        </div>
        <div className="background-image">
          <StaticImage
            style={{ marginTop: -50, opacity: 0.3 }}
            src="./assets/background_ide.png"
            alt=""
          />
        </div>
      </AboutContainer>
    </motion.div>
  );
};

export default About;
