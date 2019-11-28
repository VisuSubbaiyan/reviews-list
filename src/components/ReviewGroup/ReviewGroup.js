import React from 'react';
import Review from './Review';
import { StyledH2 } from '../base';

const ReviewGroup = ({ groupTitle, reviews }) => (
  <React.Fragment>
    <StyledH2>{groupTitle}</StyledH2>
    {reviews.map(review => <Review {...review} key={review.reviewId} />)}
  </React.Fragment>
);

export default ReviewGroup;
