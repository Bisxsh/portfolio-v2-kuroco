import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (!isBrowser) return { innerWidth: 0, innerHeight: 0 };
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize);
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
}

export const isBrowser = typeof window !== "undefined";
