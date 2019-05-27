import styled from 'styled-components';
import { viewport, styling } from '../../helpers/util';

export const ReviewWrapper = styled.div`
  margin: 10px 0;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: ${props => props.theme.boxRadius};
  box-shadow: 0px 1px 5px ${props => props.theme.mediumGrey};
  padding: 10px;
  background: #fff;
  min-height: 60px;
  display: block;
  /* justify-content: space-between; */
  
  ${styling}
`;

export const StyledWrapperComponent = styled.div`${styling}`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 12 0 0;
  justify-content: space-between;
  ${props => viewport(props.theme.breakpoints.small)`flex: 18 0 0;`}
`;

export const StyledRating = styled.div`
  ${styling}
`;
