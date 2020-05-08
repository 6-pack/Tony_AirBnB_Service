import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';
import Review from './Review.jsx';
import PageSelector from './PageSelector.jsx';

const ListContainer = styled.section`
  width: 650px;
`;

const ReviewsContainer = styled.section`
  display: flex;
  flex-flow: column;
  width: 650px;
`;


const ReviewsList = ({reviewList, pageCount, paginationHandle}) => {
  return (
      <ListContainer>
        <ReviewsContainer>
          {_.map(reviewList, (review) => <Review key={review.id} review={review} />)}
          {/* <Review/> */}
        </ReviewsContainer>

        <PageSelector paginationHandle={paginationHandle} pageCount={pageCount}/>

      </ListContainer>
  )
};

export default ReviewsList;