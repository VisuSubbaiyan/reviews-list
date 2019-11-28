import React from 'react';

import StyledHeader from './Header.styled';
import { StyledH1 } from '../Base.styled';

const Header = ({ text }) => (
  <StyledHeader>
    <StyledH1>{text}</StyledH1>
  </StyledHeader>);

export default Header;
