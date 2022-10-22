import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";
import React, { useRef, useState, useEffect, createRef } from "react";
import styled from "styled-components";
import { ImageSupplier } from "./ImageSupplier";

function getCurrentFrame(index: number) {
  return `./assets/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
}

type Props = {
  scrollHeight: number;
  numFrames: number;
  width: number;
  height: number;
};

const DisplayContainer = styled.div`
  .model {
    position: sticky;
    right: 100%;
    top: 100px;
    left: 80%;
    /* background-color: red;
    width: 100px;
    height: 100px; */
  }
`;

const AnimatedImage = ({ scrollHeight, numFrames }: Props) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const imagesSource = ImageSupplier();
  const [images, setImages] = useState<React.ReactElement[]>([]);

  const handleScroll = () => {
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }
    if (index != frameIndex) setFrameIndex(index);
  };

  const preloadImageComponents = () => {
    const componentArr: React.ReactElement[] = imagesSource.map(
      (item: any, i: number) => {
        const img = item.node.childImageSharp.gatsbyImageData;
        return <GatsbyImage image={img} alt="" className="model" />;
      }
    );
    console.log(componentArr);
    //@ts-ignore
    setImages([...componentArr]);
    console.log(images);
  };

  useEffect(() => {
    preloadImageComponents();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DisplayContainer style={{ height: scrollHeight }}>
      {/* <GatsbyImage image={images[frameIndex]} alt="" className="model" /> */}
      {images[frameIndex]}
    </DisplayContainer>
  );
};

export default AnimatedImage;
