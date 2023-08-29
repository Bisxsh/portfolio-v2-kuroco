import * as React from "react";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import lockSVG from "./assets/lock.svg";
import "./hero-v2.css";

type Props = {
  mobileNavbarOpen: boolean;
};

const HeroIndicator = ({ mobileNavbarOpen }: Props) => {
  const [locked, setLocked] = useState(false);

  function scrollLock() {
    if (!window.matchMedia("(any-hover: none)").matches) {
      //TODO scroll to next section here
      return;
    }

    if (document.getElementById("scroll-prompt")?.style.visibility === "") {
      document.getElementById("scroll-prompt")!.style.visibility = "hidden";
      document.getElementById("swipe-prompt")!.style.visibility = "visible";
      document.getElementById("swipe-prompt")!.style.display = "block";
      document.getElementById("hero-indicator-container")!.style.pointerEvents =
        "none";
    }
    if (!locked) {
      document.body.style.overflow = "hidden";
      setLocked(true);
      document.getElementById("scroll-indicator")!.style.opacity = "0.2";
      return;
    }

    document.body.style.overflow = "auto";
    document.getElementById("scroll-indicator")!.style.opacity = "1";
    setLocked(false);
  }

  return (
    <div
      className={`relative flex flex-col justify-center items-center z-30 ${
        mobileNavbarOpen ? "invisible" : ""
      }`}
    >
      <div id="swipe-prompt">
        {!mobileNavbarOpen && (
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_oMylI2hWOR.json"
            style={{
              height: "max(30vh, 120px)",
              width: "max(30vh, 120px)",
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -100%)",
            }}
          ></Player>
        )}
      </div>
      <div className="relative" onClick={scrollLock}>
        <Player
          id="scroll-indicator"
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_0msniqpo.json"
          style={{
            height: "max(10vh, 40px)",
            width: "max(10vh, 40px)",
          }}
        ></Player>
        <div id="scroll-prompt" className="opacity-40">
          {!mobileNavbarOpen && (
            <Player
              speed={1}
              autoplay
              loop
              src="https://assets4.lottiefiles.com/datafiles/dmbibBooTJK83Oo/data.json"
              style={{
                height: "max(20vh, 120px)",
                width: "max(20vh, 120px)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></Player>
          )}
        </div>
        <div
          className="opacity-40 w-[20px] aspect-square"
          style={{
            position: "absolute",
            top: "10%",
            left: "70%",
            transform: "translate(0, -50%)",
          }}
        >
          {locked && <img src={lockSVG} className="w-full" alt="locked" />}
        </div>
      </div>
    </div>
  );
};

export default HeroIndicator;
