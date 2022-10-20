import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/nav/Navbar";
import "../global.css";
import Cursor from "../components/cursor/Cursor";
import { useState } from "react";
import MouseContext from "../util/MouseContext";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";

const IndexPage = () => {
  const [mouseHovering, setMouseHovering] = useState(false);

  return (
    <MouseContext.Provider value={{ mouseHovering, setMouseHovering }}>
      <Cursor />
      <Navbar />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
      </main>
    </MouseContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Bisesh Sitaula</title>;
