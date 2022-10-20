import React from "react";
import styled from "styled-components";

type Props = {
  image: any;
  heading: string;
  description: string;
  padTop: boolean;
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
    margin-bottom: 2vh;

    > h3 {
      margin-left: max(25px, 3vw);
      font-weight: 500;
      line-height: max(47px, 100%);
    }

    .icon {
      min-width: 45px;
      @media screen and (min-width: 1600px) {
        transform: scale(2);
        margin-left: 3vw;
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
  .pad-top {
    margin-top: 1.5vw;
  }
`;

const AboutSection = (props: Props) => {
  return (
    <AboutSectionContainer>
      <div className={`header ${props.padTop ? "pad-top" : ""}`}>
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
