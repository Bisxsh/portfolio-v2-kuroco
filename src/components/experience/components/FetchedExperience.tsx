import React, { useEffect, useState } from "react";
import ExperienceListing from "./ExperienceListing";

type Props = {};

const months = [
  "Ja.",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FetchedExperience = (props: Props) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    console.log(process.env.GATSBY_KUROCO_API_BASE_URL);

    fetch(
      `${process.env.GATSBY_KUROCO_API_BASE_URL}experience/list?_output_format=json`
    )
      .then((r) => {
        console.log(r);
        const json = r.json();
        console.log(json);
        return json;
      })
      .then((r) => {
        console.log("Loaded");
        console.log(r);
        setData(r);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.list.map((j: any, i: number) => {
        return (
          <>
            <ExperienceListing
              companyName={j.companyName}
              jobTitle={j.role}
              dates={`${getFormattedDate(j.startDate)} - ${getFormattedDate(
                j.endDate
              )}`}
              description={j.description.split("\n")}
            />
            {i != data.list.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </>
        );
      })}
    </>
  );
};

function getFormattedDate(dateStr: string) {
  if (!dateStr) {
    return "Present";
  }
  const date = new Date(dateStr);
  return `${months[date.getMonth()]}. ${date.getFullYear()}`;
}

export default FetchedExperience;
