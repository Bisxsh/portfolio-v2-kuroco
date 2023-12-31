import React, { useEffect, useState } from "react";
import SmallProject from "./SmallProject";
import styled from "styled-components";

type Props = {};

const FetchedSmallProject = (props: Props) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetch(
      `${process.env.GATSBY_KUROCO_API_BASE_URL}projects/list?_output_format=json`
    )
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <SmallProjectsContainer>
      {data.list.map((p: any, i: number) => {
        return (
          <SmallProject
            key={p.projectName}
            image={
              <img src={p.image.url} alt="" className="small_project--image" />
            }
            title={p.projectName}
            technologies={p.technologies.split("\r\n")}
            description={p.description}
            github={p.github ? p.github : undefined}
            figma={p.figma ? p.figma : undefined}
            dribbble={p.dribbble ? p.dribbble : undefined}
            delay={0.25 * i}
          />
        );
      })}
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

export default FetchedSmallProject;
