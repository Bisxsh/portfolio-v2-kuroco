import React from "react";
import { Link } from "react-scroll";

type Props = {
  label: string;
  link: string;
};

const MenuOption = (props: Props) => {
  return (
    <div>
      <Link
        activeClass="active"
        className="link"
        to={props.link}
        spy={true}
        smooth={true}
        duration={500}
      >
        {props.label}
      </Link>
    </div>
  );
};

export default MenuOption;
