import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/nav/Navbar";
import "../global.css";
import Cursor from "../components/cursor/Cursor";
import { useState } from "react";
import MouseContext from "../util/MouseContext";

const IndexPage = () => {
  const [mouseHovering, setMouseHovering] = useState(false);

  return (
    <MouseContext.Provider value={{ mouseHovering, setMouseHovering }}>
      <Cursor />
      <header>
        <Navbar />
      </header>
      <main>
        <section></section>
      </main>
    </MouseContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Bisesh Sitaula</title>;
