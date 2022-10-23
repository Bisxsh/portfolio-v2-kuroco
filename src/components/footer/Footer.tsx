import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ProjectLink, { ButtonType } from "../projects/components/ExternalLink";

const Footer = () => {
  return (
    <FooterContainer>
      <StaticImage
        className="footer--logo"
        src="./images/logo.png"
        alt="logo"
      />
      <br />

      <LinksContainer>
        <ProjectLink
          className="external-link"
          buttonType={ButtonType.GITHUB}
          link={"https://github.com/Bisxsh"}
        />
        <ProjectLink
          className="external-link"
          buttonType={ButtonType.DRIBBLE}
          link={"https://dribbble.com/bisxsh"}
        />
        <ProjectLink
          className="external-link"
          buttonType={ButtonType.DISCORD}
          link={"https://discordapp.com/channels/@me/Bisxsh#0408/"}
        />
        <ProjectLink
          className="external-link"
          buttonType={ButtonType.LINKED_IN}
          link={"https://www.linkedin.com/in/bisesh-sitaula/"}
        />
        <ProjectLink
          className="external-link"
          buttonType={ButtonType.EMAIL}
          link={"mailto:bisesh.sitaula@gmail.com"}
        />
      </LinksContainer>

      <p>Designed and built by Bisesh Sitaula © 2022</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 3vw;

  .footer--logo {
    aspect-ratio: 1;
    width: 64px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  .external-link {
    background-color: white;

    img {
      aspect-ratio: 1;
    }
  }
`;

export default Footer;
