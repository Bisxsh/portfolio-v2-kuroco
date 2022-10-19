import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

type Props = {};

const LogoContainer = styled.a`
  .logo {
    width: 40px;
    height: 40px;
  }
`;

const Navbar = (props: Props) => {
  return (
    <div>
      <LogoContainer href="home">
        <StaticImage src="./assets/logo_gray.png" alt="logo" className="logo" />
      </LogoContainer>
      <nav>
        <a href="#link"></a>
        <a href="#link"></a>
        <a href="#link"></a>
        <a href="#link"></a>
        <a href="#link"></a>
      </nav>
    </div>
  );
};

export default Navbar;
