import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SmallProject from "./SmallProject";

type Props = {};

const SmallProjects = (props: Props) => {
  return (
    <SmallProjectsContainer>
      <SmallProject
        image={
          <StaticImage
            src={"../assets/small-projects/unlock-bath.png"}
            alt="Screenshot from the game"
            className="small_project--image"
          />
        }
        title="Unlock Bath"
        technologies={["Unity, C#"]}
        description="A 2D top-down adventure game built with the prompt provided for the Unlock Bath Game Jam 21"
        github="https://github.com/Bisxsh/unlock-bath"
      />
      <SmallProject
        image={
          <StaticImage
            src="../assets/small-projects/portfolio.png"
            alt="First iteration portfolio dribbble shot"
            className="small_project--image"
          />
        }
        title="Portfolio v1"
        technologies={[
          "React",
          "Typescript",
          "Gatsby",
          "Framer Motion",
          "Styled Components",
        ]}
        description="The first iteration of my personal portfolio."
        github="https://github.com/Bisxsh/portfolio"
        figma="https://www.figma.com/file/kJ8vsEHC56hF3RcfFoKTrK/Website?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/19211487-Frontend-developer-portfolio"
        delay={0.25}
      />
      <SmallProject
        image={
          <StaticImage
            src="../assets/small-projects/pomodoro-timer.png"
            alt=""
            className="small_project--image"
          />
        }
        title="Pomodoro Timer"
        technologies={["React Native", "Typescript", "Expo", "Flutter", "Dart"]}
        description="A minimilistic Pomodoro timer I created to learn and compare React Native and Flutter"
        github="https://github.com/Bisxsh/flutter-pomodoro-timer"
        delay={0.5}
      />
      <SmallProject
        image={
          <StaticImage
            src="../assets/small-projects/geoquest.png"
            alt="Screenshot from app"
            className="small_project--image"
          />
        }
        title="GeoQuest"
        technologies={[
          "Android Studio",
          "Java",
          "XML",
          "Figma",
          "Google Maps API",
        ]}
        description="Designed and created an app to game-ify excercise for BathHack22."
        github="https://github.com/bisxsh/BathHack"
        delay={0.75}
      />
      <SmallProject
        image={
          <StaticImage
            src="../assets/small-projects/to-do-list.png"
            alt="Screenshot from app"
            className="small_project--image"
          />
        }
        title="To-Do List"
        technologies={["Angular", "Typescript", "Material-UI"]}
        description="A to-do list I created when learning frontend development and Angular"
        github="https://github.com/Bisxsh/angular-todo-list"
        figma="https://www.figma.com/file/GQTxnhir2TgDUJDulqsMWV/Todo-list?node-id=0%3A1"
        dribbble="https://dribbble.com/shots/18943466-To-do-List"
        delay={1}
      />
      <SmallProject
        image={
          <StaticImage
            src="../assets/small-projects/spam.png"
            alt="Dribbble shot of the application"
            className="small_project--image"
          />
        }
        title="PI Tracking App"
        technologies={["React Native", "Expo", "Flutter", "Dart", "Typescript"]}
        description="A mobile app designed to help students handle personal informatics tracking."
        dribbble="https://dribbble.com/shots/18949914-Personal-Informatics-Tracker-Concept"
        delay={1.25}
      />
    </SmallProjectsContainer>
  );
};

const SmallProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, min(500px, 1fr));
  place-items: center;
  grid-gap: 20px;

  @media screen and (min-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default SmallProjects;
