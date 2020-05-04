import React from 'react';
import styled from 'styled-components';


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

const TotalScores = styled.div`
  display: flex;
`;

const SearchReview = styled.form`
  border: 1px solid gray;
  border-radius: 2px;
`;

const Overview = (props) => {

  return (
    <ReviewSection>
      <ReviewHeader> Reviews </ReviewHeader>
      <StatusGrid>
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
        <SearchReview>
            <input type="text" placeholder="Search Reviews" name="seach" value=""/>
            <button> <img src=""/>X</button>
            <button type="submit'"> <img src=''/></button>
        </SearchReview>
      </StatusGrid>
    </ReviewSection>
  )
}

export default Overview;
