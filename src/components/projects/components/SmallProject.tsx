import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { EnterWithFade } from "../../../util/FramerMotion";
import ExternalLink, { ButtonType } from "./ExternalLink";

type Props = {
  image: React.ReactElement;
  title: string;
  technologies: string[];
  description: string;
  delay?: number;
  figma?: string;
  dribbble?: string;
  github?: string;
};

const SmallProject = ({
  image,
  title,
  technologies,
  description,
  figma,
  dribbble,
  github,
  delay,
}: Props) => {
  return (
    <motion.div {...EnterWithFade(0)}>
      <motion.div
        viewport={{ once: true }}
        animate={{ rotate: [0, 0, 1, 0, -1, 0, 1, 0, -1, 0] }}
        transition={{ duration: 0.5, delay: 1.5 + (delay || 0) }}
      >
        <SmallProjectContainer>
          {image}
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <h6 className="card-subtitle">
              <i>{technologies.join(", ")}</i>
            </h6>
            <h5 className="card-body">{description}</h5>
            <div className="link-container">
              {github && (
                <ExternalLink
                  className={"link"}
                  buttonType={ButtonType.GITHUB}
                  link={github}
                />
              )}
              {figma && (
                <ExternalLink
                  className={"link"}
                  buttonType={ButtonType.FIGMA}
                  link={figma}
                />
              )}
              {dribbble && (
                <ExternalLink
                  className={"link"}
                  buttonType={ButtonType.DRIBBLE}
                  link={dribbble}
                />
              )}
            </div>
          </div>
        </SmallProjectContainer>
      </motion.div>
    </motion.div>
  );
};

const SmallProjectContainer = styled.div`
  position: relative;
  height: 20vw;
  min-height: 300px;
  aspect-ratio: 1;
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.1) 60%,
    hsl(0 0% 0% / 0.8)
  );

  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  transition: transform 500ms ease;

  :hover,
  :focus-within {
    transform: scale(1.05);

    .small_project--image {
      opacity: 0.3;
      transform: scale(1.1);
    }

    .card-title::after {
      transform: scaleX(1);
    }

    .card-content {
      transform: translateY(0);
      transition-delay: 500ms;

      > *:not(.card-title) {
        opacity: 1;
        transition-delay: 500ms;
      }
    }
  }

  .small_project--image {
    position: absolute;
    opacity: 1;
    display: block;
    width: 100%;
    aspect-ratio: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
    z-index: -1;
    border-radius: 10px;
  }

  .card-content {
    --padding: 0.5em;
    padding: var(--padding);
    padding-bottom: 10px;
    transform: translateY(78%);
    transition: all 500ms ease;

    > *:not(.card-title) {
      transition: opacity 500ms linear;
      margin: 0;
      opacity: 0;
    }

    .card-subtitle {
      margin-bottom: 5px;
    }

    .card-body {
      margin-bottom: 20px;
    }
  }

  .card-title {
    position: relative;
    margin-bottom: 15px;
    width: max-content;

    ::after {
      content: "";
      position: absolute;
      height: 3px;
      left: calc(var(--padding) * -1);
      bottom: 0;
      width: calc(100% + var(--padding));
      background-color: var(--color-accent);
      transition: transform 500ms ease;
      transform-origin: left;
      transform: scaleX(0);
    }
  }

  .link-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .link {
      background-color: var(--color-accent);
      margin-bottom: 0;
    }
  }

  @media (hover: none) {
    .visible {
      -webkit-animation: shake-horizontal 0.8s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) both infinite;
      animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        both;
      animation-delay: 500ms;
    }
  }

  @-webkit-keyframes shake-horizontal {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      -webkit-transform: translateX(5px);
      transform: translateX(-5px);
    }
    20%,
    40%,
    60% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    80% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    90% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
  }
  @keyframes shake-horizontal {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    20%,
    40%,
    60% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    80% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    90% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
  }
`;

export default SmallProject;
