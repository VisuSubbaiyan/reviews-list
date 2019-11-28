import React from 'react';
import { Icon, StyledH4 } from '../base';
import { StyledRating } from './Review.styled';

import { ReactComponent as Star } from './images/star.svg';

const starGroup = [Star, Star, Star, Star, Star];

const Rating = ({ stars }) => (
  <StyledRating css={`flex-direction: colomn;`}>
    <StyledH4>{'STARS'}</StyledH4>
    {starGroup.map((Item, index) => {
      const css = index < stars ? `svg {fill: #f6bc35;}` : `svg {fill: grey}`;
      return <Icon icon={Item} key={`key-${index}`} css={css} size={'s'} />;
    })}
  </StyledRating>
);

export default Rating;
