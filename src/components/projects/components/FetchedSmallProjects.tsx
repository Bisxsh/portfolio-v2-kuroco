import React, { useEffect, useState } from "react";
import SmallProject from "./SmallProject";
import { StaticImage } from "gatsby-plugin-image";

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
    <>
      {data.list.map((p: any, i: number) => {
        return (
          <SmallProject
            image={
              <img src={p.image.url} alt="" className="small_project--image" />
            }
            title={p.projectName}
            technologies={p.technologies.split("\n")}
            description={p.description}
            github={p.github ? p.github : undefined}
            figma={p.figma ? p.figma : undefined}
            dribbble={p.dribbble ? p.dribbble : undefined}
            delay={0.25 * i}
          />
        );
      })}
    </>
  );
};

export default FetchedSmallProject;
