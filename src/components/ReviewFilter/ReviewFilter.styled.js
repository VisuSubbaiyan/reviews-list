import styled from 'styled-components';
import { viewport } from '../../helpers/util';

import { GeneralContiner } from '../base';

export const StyledReviewFilter = styled.div`
  display: flex;
  top: 60px;
  flex-flow: row wrap;
  justify-content: space-between;
  min-height: 60px;
  width: 95%;
  /* background: ${props => props.theme.lightGrey} */

  ${props => viewport(props.theme.breakpoints.small)`width: 720px;`}
`;

export const ReviewFilterContainer = styled(GeneralContiner)`
    width: 100vw;
    background: ${props => props.theme.mediumGrey};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 60px;
`;
