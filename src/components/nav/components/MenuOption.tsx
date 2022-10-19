import React from "react";

type Props = {
  label: string;
  link: string;
};

const MenuOption = (props: Props) => {
  return (
    <div>
      <a href={props.link}>{props.label}</a>
    </div>
  );
};

export default MenuOption;
