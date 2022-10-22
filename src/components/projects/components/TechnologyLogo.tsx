import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

type Props = {
  image: React.ReactElement;
  logoText: string;
};

const TechnologyLogo = ({ image, logoText }: Props) => {
  return (
    <LogoContainer>
      {image}
      <h6 className="text">{logoText}</h6>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  position: relative;
  height: 80px;
  aspect-ratio: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    opacity: 1;
    display: block;
    width: 80px;
    aspect-ratio: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  :hover,
  :active {
    img {
      opacity: 0.1;
    }
    .text {
      opacity: 1;
    }
  }

  .text {
    color: var(--color-text);
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%); */
    transition: opacity 0.2s, visibility 0.2s;
    opacity: 0;
  }
`;

export default TechnologyLogo;
