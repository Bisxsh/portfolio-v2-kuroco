import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  image: any;
  heading: string;
  description: string;
};

const AboutSectionContainer = styled.div`
  border: 1px solid var(--color-text);
  padding: min(10vw, 35px);
  aspect-ratio: 1;
  height: 100%;
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: max(4vh, 10px);

    > h3 {
      margin-left: max(25px, 1.5vw);
      font-weight: 500;
      line-height: max(47px, 100%);
    }

    .icon {
      min-width: 45px;
      @media screen and (min-width: 1600px) {
        transform: scale(1.4);
        margin-left: 1vw;
      }
    }

    .description-container {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .heading-tag {
      width: 10%;
      overflow: hidden;
    }
  }

  transition: outline-offset 200ms ease;
  :hover {
    outline: 1px solid var(--color-text);
    outline-offset: -6px;
  }
`;

const AboutSection = (props: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <AboutSectionContainer
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`header ${hovered ? "" : ""}`}>
        {props.image}
        <h3>{props.heading}</h3>
      </div>
      <div className="description-container">
        <p className="description">{props.description}</p>
      </div>
    </AboutSectionContainer>
  );
};

export default AboutSection;
