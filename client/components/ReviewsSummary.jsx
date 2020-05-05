import React from "react";
import styled from "styled-components";

const TotalScores = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 26px;
  width: 55px;
  padding: 0px 8px 0px 0px;
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: 800px;
  line-height: 1.44em;
`;

const StarImg = styled.div`
  display: block;
  will-change: tranform;
  height: 12px;
  width: 15px;
  background-size: 14px 12px;
  background-image: url("https://i.imgur.com/lWEe6LL.png");
  background-repeat: space no-repeat;
`;

const Separator = styled.span`
  height: 12px;
  border-right: 1px solid rgb(235, 235, 235);
`;

const ReviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 0 14px;
`;

const ReviewTotal = styled(Total)`
  width: 36px;
`;

const ReviewsSummary = (props) => {

  return (
    <TotalScores>

      <StarBox>
        <StarImg />
        <Total> 4.90 </Total>
      </StarBox>

      <Separator/>

      <ReviewBox>
        <ReviewTotal> 200</ReviewTotal>
        <Total> reviews</Total>
      </ReviewBox>

    </TotalScores>
  )
}

export default ReviewsSummary;