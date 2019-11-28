import styled from 'styled-components';
import { styling } from '../../../helpers/util';

export const StyledTextInput = styled.input`
  ${props => `
    border-radius: ${props.theme.buttonRadius}
    border: 1px solid ${props.theme.blue};
    background: ${props.theme.lightGrey};
    font-size: ${props.theme.mediumFont};
  `}
  line-height: 21px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;

  ${styling}
`;
