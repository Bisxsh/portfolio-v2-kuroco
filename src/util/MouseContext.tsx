import { createContext } from "react";

const MouseContext = createContext({
  mouseHovering: false,
  setMouseHovering: (val: boolean) => {},
});

export default MouseContext;

export function mouseEntered(setMouseHovering: (val: boolean) => void) {
  if (setMouseHovering) setMouseHovering(true);
}

export function mouseLeft(setMouseHovering: (val: boolean) => void) {
  if (setMouseHovering) setMouseHovering(false);
}
