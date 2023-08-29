import * as React from "react";
import * as FluidAnimation from "react-fluid-animation";
import HeroIndicator from "./HeroIndicator";
import dotsSVG from "./assets/dots.svg";
import arrowSVG from "./assets/arrow.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./hero-v2.css";

type Props = {
  mobileNavbarOpen: boolean;
};

const HeroV2 = (props: Props) => {
  const { width } = useWindowDimensions();
  function hideSwipe() {
    if (document.getElementById("swipe-prompt")!.style.display === "none")
      return;
    document.getElementById("swipe-prompt")!.style.display = "none";
    document.getElementById("hero-indicator-container")!.style.pointerEvents =
      "auto";
  }

  return (
    <div
      className={`h-screen none ${props.mobileNavbarOpen ? "invisible" : ""}`}
    >
      <div className="flex justify-center items-center h-screen unclickable z-20 select-none abs-center overflow-hidden w-screen">
        <div className="text-center">
          <h3 className="hero-v2-h3">Student by day</h3>
          <h2 className="hero-v2-h2">Creative</h2>
          <h2 className="hero-v2-h2">Developer</h2>
          <h3 className="hero-v2-h3">by later day</h3>
        </div>
        <h1 className="abs-center whitespace-nowrap hero-v2-h1">
          Bisesh Sitaula
        </h1>
      </div>
      <div
        className="h-screen abs-center w-screen canvas-container"
        onClick={() => hideSwipe()}
        onTouchMove={() => hideSwipe()}
      >
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <FluidAnimation.default.WrappedComponent />
      </div>
      <div id="hero-indicator-container" className="abs-center bottom-[64px]">
        <HeroIndicator mobileNavbarOpen={props.mobileNavbarOpen} />
      </div>
      {/* TODO check sizing of dots on smaller screens */}
      <img
        src={dotsSVG}
        className="pointer-events-none absolute bottom-0 left-0 max-w-[30vw]"
        alt=""
      />
      {(width || 0) > 1024 && (
        <img
          src={arrowSVG}
          className={`pointer-events-none absolute top-[6rem] ${
            (width || 0) > 1720 ? "left-[68%]" : "right-[10vw]"
          }`}
          alt=""
        />
      )}
    </div>
  );
};

export default HeroV2;
