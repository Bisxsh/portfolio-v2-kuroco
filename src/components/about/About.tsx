import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { EnterWithFade } from "../../util/FramerMotion";
import AboutSection from "./components/AboutSection";

type Props = {};

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  max-width: 100vw;
  overflow: hidden;
  position: relative;

  .section-heading {
    margin-bottom: 5vh;
    /* position: absolute; */
    top: 50;
    left: 50;
    text-align: center;
  }

  .boxes-container {
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(1, minmax(250px, 400px));
    height: max-content;
    max-width: 90vw;
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
`;

const About = (props: Props) => {
  return (
    <AboutContainer>
      <motion.div {...EnterWithFade(0.5)}>
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
            heading="Student"
            padTop={true}
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
            padTop={false}
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
            padTop={false}
          />
        </div>
        <div className="background-image">
          <StaticImage
            style={{ marginTop: -50, opacity: 0.3 }}
            src="./assets/background_ide.png"
            alt=""
          />
        </div>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
