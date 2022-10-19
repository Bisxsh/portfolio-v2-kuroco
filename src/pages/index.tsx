import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/nav/Navbar";
import "../global.css";

const IndexPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section></section>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Bisesh SItaula</title>;
