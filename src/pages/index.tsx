import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/nav/Navbar";
import "../global.css";
import Cursor from "../components/cursor/Cursor";
import { useEffect, useRef, useState } from "react";
import MouseContext from "../util/MouseContext";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import { Element } from "react-scroll";
import styled from "styled-components";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import HeroV2 from "../components/hero-v2/Hero";

const NavbarContainer = styled.div<{ $blackBackground?: boolean }>``;

const IndexPage = () => {
  if (typeof window === `undefined`) {
    return <></>;
  }
  const [mouseHovering, setMouseHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [blackBackground, setBlackBackground] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowNavbar(prevScrollpos > currentScrollPos);
    prevScrollpos = currentScrollPos;
    setBlackBackground(
      window.pageYOffset <= (aboutRef.current?.offsetTop ?? 400)
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = blackBackground
      ? "black"
      : "var(--color-bg)";
  }, [blackBackground]);

  return (
    <MouseContext.Provider value={{ mouseHovering, setMouseHovering }}>
      <Cursor />

      <Navbar blackBackground={blackBackground} showNavbar={showNavbar} />

      <main>
        <section>
          {/* <Hero /> */}
          <HeroV2 mobileNavbarOpen={mobileMenuOpen} />
        </section>
        <CenteredSection ref={aboutRef}>
          <Element name="about" />
          <About />
        </CenteredSection>
        <CenteredSection>
          <Element name="experience" />
          <Experience />
        </CenteredSection>
        <CenteredSection>
          <Element name="projects" />
          <Projects />
        </CenteredSection>
        <CenteredSection>
          <Element name="contact" className="email" />
          <Contact />
        </CenteredSection>
        <CenteredSection>
          <Footer />
        </CenteredSection>
      </main>
    </MouseContext.Provider>
  );
};

const CenteredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Bisesh Sitaula</title>;
