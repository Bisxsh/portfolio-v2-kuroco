import React from "react";
import AnimatedImage from "./components/AnimatedImage";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <AnimatedImage
        scrollHeight={10000}
        width={1000}
        height={1000}
        numFrames={158}
      />
      {/* <Test /> */}
      {/* {images.map((item: any, i: number) => {
        return <img src={item.node.childImageSharp.fluid.src} alt={""} />;
      })} */}
    </div>
  );
};

export default Projects;
