import React from 'react';
import styled from 'styled-components';
import { StyledLabel, StyledH4 } from '../base';

import { StyledWrapperComponent } from './Review.styled';
import { viewport } from '../../helpers/util';

const EnhancedLabel = styled(StyledLabel)`
  overflow: hidden;
  width: 85px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;

  ${props => viewport(props.theme.breakpoints.small)`width: 250px;`}
`;

const Product = ({ childAsin, productTitle }) => (
  <StyledWrapperComponent>
    <StyledH4>{childAsin}</StyledH4>
    <EnhancedLabel title={productTitle}>{productTitle}</EnhancedLabel>
  </StyledWrapperComponent>
);

export default Product;
