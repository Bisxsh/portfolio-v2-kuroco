import React from "react";
import styled from "styled-components";

type Props = {
  companyName: string;
  jobTitle: string;
  dates: string;
  description: string[];
};

const ListingContainer = styled.div`
  h4 {
    font-weight: 400;
  }

  h5 {
    margin: 0;
    margin-top: 3px;
  }

  @media screen and (min-width: 750px) {
    .heading-container {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const ExperienceListing = (props: Props) => {
  console.log(props.description);

  return (
    <ListingContainer>
      <div className="heading-container">
        <h3>{props.companyName}</h3>
        <h4>{props.dates}</h4>
      </div>
      <h5>{props.jobTitle}</h5>
      <ul>
        {props.description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </ListingContainer>
  );
};

export default ExperienceListing;
