import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import MouseContext, {
  mouseEntered,
  mouseLeft,
} from "../../../util/MouseContext";

type Props = {};

const ScrollPrompt = (props: Props) => {
  const { setMouseHovering } = useContext(MouseContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 3 }}
      onMouseEnter={() => mouseEntered(setMouseHovering)}
      onMouseLeave={() => mouseLeft(setMouseHovering)}
    >
      <ScrollContainer className="hero--scroll-prompt">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="m_scroll_arrows arr-1"></span>
          <span className="m_scroll_arrows arr-2"></span>
          <span className="m_scroll_arrows arr-3"></span>
        </div>
      </ScrollContainer>
    </motion.div>
  );
};

export default ScrollPrompt;

const ScrollContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
  margin-top: 125px;
  position: absolute;
  bottom: 2%;
  cursor: pointer;

  .m_scroll_arrows {
    display: block;
    width: 5px;
    height: 5px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);

    border-right: 2px solid white;
    border-bottom: 2px solid white;
    margin: 0 0 3px 4px;

    width: 16px;
    height: 16px;
  }

  .arr-1 {
    margin-top: 1px;
  }

  .arr-1,
  .arr-2,
  .arr-3 {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  }

  .arr-1 {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;

    animation-direction: alternate;
    animation-delay: alternate;
  }

  .arr-2 {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;

    animation-delay: 0.2s;
    animation-direction: alternate;

    margin-top: -6px;
  }

  .arr-3 {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    -webkit-animation-direction: alternate;

    animation-delay: 0.3s;
    animation-direction: alternate;

    margin-top: -6px;
  }

  .mouse {
    height: 42px;
    width: 24px;
    border-radius: 14px;
    transform: none;
    border: 2px solid white;
    top: 170px;
  }

  .wheel {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: white;
    position: relative;

    height: 4px;
    width: 4px;
    border: 2px solid #fff;
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  .wheel {
    -webkit-animation: mouse-wheel 1.5s linear infinite;
    -moz-animation: mouse-wheel 1.5s linear infinite;
    animation: mouse-wheel 1.5s linear infinite;
  }

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(16px);
      -ms-transform: translateY(16px);
      transform: translateY(16px);
    }
  }
  @-moz-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 3px;
    }
    50% {
      top: 6px;
    }
    75% {
      top: 3px;
    }
    100% {
      top: 1px;
    }
  }
  @-o-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 3px;
    }
    50% {
      top: 6px;
    }
    75% {
      top: 3px;
    }
    100% {
      top: 1px;
    }
  }
  @keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 3px;
    }
    50% {
      top: 6px;
    }
    75% {
      top: 3px;
    }
    100% {
      top: 1px;
    }
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
