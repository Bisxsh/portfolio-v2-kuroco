import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { title } from "process";
import React, { useContext } from "react";
import styled from "styled-components";
import { EnterWithFade } from "../../util/FramerMotion";
import MouseContext, { mouseEntered, mouseLeft } from "../../util/MouseContext";
import AnimatedImage from "./components/AnimatedImage";
import ShowcaseProject from "./components/ShowcaseProject";
import SmallProject from "./components/SmallProject";
import SmallProjects from "./components/SmallProjects";

type Props = {};

const Projects = (props: Props) => {
  function openGithubRepositories() {
    window
      .open("https://github.com/bisxsh?tab=repositories", "_blank")
      ?.focus();
  }
  const { setMouseHovering } = useContext(MouseContext);
  return (
    <ProjectsContainer>
      <motion.h2 {...EnterWithFade(0)} className="section-heading">
        Projects
      </motion.h2>
      <ShowcaseProject />
      <motion.h3 {...EnterWithFade(0)} className="projects--subheading">
        Other Projects
      </motion.h3>
      <SmallProjects />
      <motion.div
        className="small-projects--button"
        onClick={openGithubRepositories}
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          default: {
            duration: 0.7,
          },
        }}
        onMouseEnter={() => mouseEntered(setMouseHovering)}
        onMouseLeave={() => mouseLeft(setMouseHovering)}
      >
        🔎 View More 🔍
      </motion.div>
      <div style={{ height: 1000 }} />
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .projects--subheading {
    margin-top: 10vh;
    margin-bottom: 3vh;
  }

  .small-projects--button {
    margin: 30px;
    padding: 20px 50px;
    border: 2px solid var(--color-c2a);
    color: var(--color-c2a);
    border-radius: 50px;
    cursor: pointer;
    z-index: 1;
    transition: all 250ms ease;
    background-color: transparent;
    font-weight: 600;

    :hover {
      background-color: var(--color-c2a);
      color: var(--color-accent);
    }
  }
`;

export default Projects;
