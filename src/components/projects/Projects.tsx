import React from "react";
import AnimatedImage from "./components/AnimatedImage";
import ShowcaseProject from "./components/ShowcaseProject";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <h2 className="section-heading">Projects</h2>
      <ShowcaseProject />
    </div>
  );
};

export default Projects;
