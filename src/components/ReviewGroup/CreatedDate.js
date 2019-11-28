import React from 'react';
import { StyledWrapperComponent } from './Review.styled';

import { formatTitle } from '../../helpers/util';
import { StyledLabel, StyledH4 } from '../base';

const CreatedDate = ({ reviewedDate }) => (
  <StyledWrapperComponent>
    <StyledH4>{'Date'}</StyledH4>
    <StyledLabel>{formatTitle(reviewedDate)}</StyledLabel>
  </StyledWrapperComponent>
);

export default CreatedDate;
