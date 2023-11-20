import { motion } from "framer-motion";
import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { EnterWithFade } from "../../util/FramerMotion";

const ExperienceContainer = styled.div`
  padding: 0 max(5vw, 20px);
`;

const FetchedExperience = lazy(() => import("./components/FetchedExperience"));

const Experience = () => {
  return (
    <ExperienceContainer>
      <motion.div {...EnterWithFade(0)}>
        <h2>Experience</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <FetchedExperience />
        </Suspense>
      </motion.div>
    </ExperienceContainer>
  );
};
export default Experience;
