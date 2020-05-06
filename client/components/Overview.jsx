import React from 'react';
import styled from 'styled-components';
import ReviewsSummary from './ReviewsSummary.jsx';
import SearchReview from './SearchReview.jsx';

const ReviewSection = styled.section`
  border-bottom: 1px solid grey;
  border-radius: 1px;
  height: 100px;
  width: 650px;
  margin-bottom: 8px;
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
  grid-template-columns: auto 33.33% ;
  grid-template-rows: 44px;
`;


const Overview = (props) => (
  <ReviewSection>
    <ReviewHeader> Reviews </ReviewHeader>
    <StatusGrid>
      <ReviewsSummary />
      <SearchReview
        searchInputHandle={props.searchInputHandle}
        searchPhrase={props.searchPhrase}
        clearField={props.clearField}
      />
    </StatusGrid>
  </ReviewSection>
);

export default Overview;
