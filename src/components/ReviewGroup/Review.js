import React from 'react';
import PropTypes from 'prop-types';
import { ReviewWrapper, ReviewContainer } from './Review.styled';
import { Icon, StyledH3 } from '../base';

import Rating from './Rating';
import CreatedDate from './CreatedDate';
import Product from './Product';

import { ReactComponent as UserIcon } from './images/user.svg';

const Review = props => (
  <ReviewWrapper className="review">
    <ReviewContainer>
      <Icon icon={UserIcon} size="l" />
      <CreatedDate reviewedDate={props.reviewCreated} />
      <Rating stars={props.stars} />
      <Product childAsin={props.childAsin} productTitle={props.productTitle} />
    </ReviewContainer>
    <StyledH3>{props.title}</StyledH3>
    <ReviewContainer>{props.content}</ReviewContainer>
  </ReviewWrapper>
);

Review.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  childAsin: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  reviewCreated: PropTypes.number.isRequired
};

export default React.memo(Review);
