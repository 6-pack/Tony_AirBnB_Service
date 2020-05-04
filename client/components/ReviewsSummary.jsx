import React from "react";
import styled from "styled-components";

const TotalScores = styled.div`
  display: flex;
`;

const ReviewsSummary = (props) => {

  return (
    <TotalScores>
    <div>
      <span>starImg</span>
      <span>#</span>
    </div>

    <div>
      <span>#</span>
      <span> Reviews</span>
    </div>
  </TotalScores>
  )
}

export default ReviewsSummary;