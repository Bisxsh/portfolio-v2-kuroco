import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ImageSupplier } from "./ImageSupplier";

type Props = {
  scrollHeight: number;
  numFrames: number;
  canvasWidth: number;
  canvasHeight: number;
};

const DisplayContainer = styled.div`
  position: relative;
  canvas {
    border-radius: 70px;
    position: sticky;
    top: 10%;
    left: 50%;
  }
  @media screen and (min-width: 1000px) {
    canvas {
      top: 20%;
      left: 80%;
      transform: translate(0, 0);
    }
  }
`;

const AnimatedImage = ({
  scrollHeight,
  numFrames,
  canvasWidth,
  canvasHeight,
}: Props) => {
  if (typeof window === `undefined`) {
    return <></>;
  }

  const [frameIndex, setFrameIndex] = useState(0);
  let imagesSource = ImageSupplier();
  const canvasRef = useRef(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { height, width } = useWindowDimensions();
  let offset =
    window.pageYOffset +
    (document.getElementById("canvas")?.getBoundingClientRect().top || 0);

  const handleScroll = () => {
    const scrollFraction =
      (window.scrollY - offset) / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }
    if (index != frameIndex) setFrameIndex(index);
  };

  const renderCanvas = () => {
    //@ts-ignore
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = canvasWidth;
    context.canvas.height = canvasHeight;
  };

  const preloadImageComponents = () => {
    const list = [];
    for (let i = 1; i < numFrames; i++) {
      const img = new Image();
      const imgSrc = imagesSource[i].node.childImageSharp.fluid.src;
      img.src = imgSrc;
      list.push(img);
    }
    setImages(list);
  };

  useEffect(() => {
    preloadImageComponents();
    renderCanvas();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }

    //@ts-ignore
    const context = canvasRef.current.getContext("2d");
    let requestId: number;

    const render = () => {
      try {
        context.drawImage(images[frameIndex], 5, 0);
      } catch (e) {}
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  useEffect(() => {
    offset =
      window.pageYOffset +
      (document.getElementById("canvas")?.getBoundingClientRect().top || 0);
  }, [height]);

  return (
    <DisplayContainer style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} className="model" id="canvas" />
    </DisplayContainer>
  );
};

export default AnimatedImage;
