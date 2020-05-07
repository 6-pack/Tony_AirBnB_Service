import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ReviewContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 24px 24px auto;
  grid-template-columns: 48px auto;
  grid-template-areas:
    'avatar fullName'
    'avatar datePublished'
    'comment comment';
  border-bottom: 1px solid rgb(216, 216, 216);
  margin-top: 10px;
  padding-bottom: 15px;
`;

const Avatar = styled.div`
  grid-area: avatar;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100%;
  border-radius: 50%;
`;

const FullName = styled.div`
  grid-area: fullName;
  display: grid;
  justify-content: start;
  align-items: center;
  margin-left: 15px;
`;

const DatePublished = styled.div`
  grid-area: datePublished;
  display: grid;
  justify-content: start;
  align-items: center;
  margin-left: 15px;
`;

const Comment = styled.div`
  grid-area: comment;
  margin-top: 15px;
`;


const Review = ({review}) => {
  return (
    <ReviewContainer>
      <Avatar imgUrl={review.avatar} />
      <FullName> {review.first_name} {review.last_name}</FullName>
      <DatePublished> { moment(review.date_published).format("MMM YYYY")}</DatePublished>
      <Comment> {review.comment} </Comment>
    </ReviewContainer>
  )
};

export default Review;
