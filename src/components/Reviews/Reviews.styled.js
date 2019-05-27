import styled from 'styled-components';
import { viewport } from '../../helpers/util';

export const ReviewsMainWrapper = styled.div`
  padding-top: 150px;
  width: 95%;
  margin: 0 auto;
  min-height: 100vh;
  ${props => viewport(props.theme.breakpoints.medium)`width: 720px;`}
`;


export const StyledButton = styled.div`
  height: 20px;
  width: 20px;
  background: red;
`;