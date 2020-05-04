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

const ReviewHeader = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
  color: rgb(72, 72, 72);
  padding-top: 2px;
  padding-bottom: 2px;
`;

const StatusGrid = styled.section`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 44px;
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
