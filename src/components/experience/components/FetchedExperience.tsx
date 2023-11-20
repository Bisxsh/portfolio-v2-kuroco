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
    fetch(
      `${process.env.GATSBY_KUROCO_API_BASE_URL}experience/list?_output_format=json`
    )
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      {data.list.map((j: any, i: number) => {
        return (
          <div key={j.companyName}>
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
          </div>
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
