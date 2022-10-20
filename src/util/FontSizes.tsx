import useWindowDimensions from "../hooks/useWindowDimensions";
import React from "react";

export class FontSizes {
  public heroHeading: number = 96;
  public heading: number = 64;
  public subHeading: number = 36;
  public medium: number = 24;
  public small: number = 20;
  public extraSmall: number = 12;

  public static instance: FontSizes;
  public static getInstance() {
    if (!this.instance) this.instance = new FontSizes();
    return this.instance;
  }

  public FontSizes() {
    if (typeof window === `undefined`) {
      return <></>;
    }

    const { height, width } = useWindowDimensions();
    if ((width || 0) < 1024) {
      this.heroHeading = 64;
      this.heading = 28;
      this.subHeading = 24;
      this.medium = 20;
      this.small = 16;
      this.extraSmall = 8;
    }
  }
}
