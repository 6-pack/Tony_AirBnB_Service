import React from 'react';
import styled from 'styled-components';
import ReviewsSummary from "./ReviewsSummary.jsx";
import SearchReview from "./SearchReview.jsx";

const ReviewSection = styled.section`
  border: 1px solid black;
  border-radius: 1px;
  height: 100px;
  width: 600px;
  text-color: blue;
`;

const ReviewHeader = styled.h1`
  color: blue;
  font-size: 1.5em;
`;

const StatusGrid = styled.section`
  display: grid;
  grid-template-columns: 3fr 7fr;
`;


const Overview = (props) => {

  return (
    <ReviewSection>
      <ReviewHeader> Reviews </ReviewHeader>
      <StatusGrid>
        <ReviewsSummary />
        <SearchReview />
      </StatusGrid>
    </ReviewSection>
  )
}

export default Overview;
