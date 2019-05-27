import styled from 'styled-components';
import { styling } from '../../../helpers/util';

const StyledSelect = styled.select`
  border-radius: ${props => props.theme.formControlRadius};
  border: 1px solid ${props => props.disabled ? props.theme.secondary : props.theme.blue};
  background-color: ${props => props.theme.lightGrey};
  font-size: ${props => props.theme.mediumFont};
  height: 32px;
  width: 100%;

  ${styling}
`;

export default StyledSelect;
