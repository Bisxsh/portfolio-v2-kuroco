import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Link } from "react-scroll";
import { EnterWithFade } from "../../../util/FramerMotion";
import MouseContext, {
  mouseEntered,
  mouseLeft,
} from "../../../util/MouseContext";

type Props = {
  label: string;
  link: string;
  number: number;
};

const MenuOption = (props: Props) => {
  const { setMouseHovering } = useContext(MouseContext);

  return (
    <div
      onMouseEnter={() => mouseEntered(setMouseHovering)}
      onMouseLeave={() => mouseLeft(setMouseHovering)}
    >
      <Link
        activeClass="active"
        className="link"
        to={props.link}
        spy={true}
        smooth={true}
        duration={500}
      >
        <h6 className="link-number">0{props.number}. </h6>&lt;
        <span className="link-text">{props.label}</span> /&gt;
      </Link>
    </div>
  );
};

export default MenuOption;
