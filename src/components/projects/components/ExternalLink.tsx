import React, { useContext } from "react";
import styled from "styled-components";
import {
  DiscordIcon,
  DribbbleIcon,
  EmailIcon,
  FigmaIcon,
  GithubIcon,
  LinkedInIcon,
} from "../assets/socials/LinkImage";
import { isBrowser, motion } from "framer-motion";
import MouseContext, {
  mouseEntered,
  mouseLeft,
} from "../../../util/MouseContext";

export enum ButtonType {
  GITHUB,
  FIGMA,
  DRIBBLE,
  DISCORD,
  LINKED_IN,
  EMAIL,
}

type Props = {
  buttonType: ButtonType;
  link: string;
  className?: string;
};

const ProjectLink = (props: Props) => {
  if (typeof window === `undefined`) {
    return <></>;
  }
  const { setMouseHovering } = useContext(MouseContext);

  function openLink() {
    if (props.link) {
      window.open(props.link, "_blank")?.focus();
    }
  }

  let image: JSX.Element;

  switch (props.buttonType) {
    case ButtonType.GITHUB:
      image = GithubIcon;
      break;
    case ButtonType.FIGMA:
      image = FigmaIcon;
      break;
    case ButtonType.DRIBBLE:
      image = DribbbleIcon;
      break;
    case ButtonType.DISCORD:
      image = DiscordIcon;
      break;
    case ButtonType.LINKED_IN:
      image = LinkedInIcon;
      break;
    case ButtonType.EMAIL:
      image = EmailIcon;
      break;
    default:
      image = <></>;
      break;
  }

  return (
    <ButtonWrapper
      onClick={openLink}
      onMouseEnter={() => mouseEntered(setMouseHovering)}
      onMouseLeave={() => mouseLeft(setMouseHovering)}
    >
      <motion.div
        className={`button ${props.className || ""}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {image}
      </motion.div>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  .button {
    background-color: var(--color-primary);
    padding: min(1vw, 10px);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 5px;
    cursor: pointer;
  }

  img {
    width: 24px;
    max-width: 4vw;
    aspect-ratio: 1;
    margin: 0;
  }
`;

export default ProjectLink;
