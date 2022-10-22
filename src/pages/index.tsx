import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/nav/Navbar";
import "../global.css";
import Cursor from "../components/cursor/Cursor";
import { useState } from "react";
import MouseContext from "../util/MouseContext";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import { Element } from "react-scroll";
import styled from "styled-components";
import Projects from "../components/projects/Projects";

const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 2;
  background: var(--color-bg);
  border-radius: 0 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 10px;
  max-height: 10vh;
`;

const IndexPage = () => {
  if (typeof window === `undefined`) {
    return <></>;
  }
  const [mouseHovering, setMouseHovering] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowNavbar(prevScrollpos > currentScrollPos);
    prevScrollpos = currentScrollPos;
  };

  return (
    <MouseContext.Provider value={{ mouseHovering, setMouseHovering }}>
      <Cursor />
      <NavbarContainer>{showNavbar && <Navbar />}</NavbarContainer>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Element name="about" />
          <About />
        </section>
        <section>
          <Element name="experience" />
          <Experience />
        </section>
        <section>
          <Element name="projects" />
          <Projects />
        </section>
      </main>
    </MouseContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Bisesh Sitaula</title>;
