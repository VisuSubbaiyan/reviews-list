import styled, { css } from 'styled-components';
import { styling, getSize } from '../../helpers/util';

export const StyledH1 = styled.h1`
  font-size: 21px;
`;

export const StyledH2 = styled.h2`
  font-size: 14px;
  flex-flow: column;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const StyledH3 = styled.h3`
  font-size: 14px;
  flex-flow: column;
`;

export const StyledH4 = styled.h4`
  font-size: 12px;
  flex-flow: column;
  text-transform: uppercase;
  margin: 0;
`;

export const StyledIcon = styled.i`
  width: ${getSize};
  height: ${getSize};
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  ${styling}
`;

export const StyledLabel = styled.label`
  background: ${props => props.bgColor};
  font-weight: ${props => props.fontWeight};
  ${props => props.chips && css`
    border-radius: 2px;
    box-shadow: inset 0 -1px 0 rgba(27,31,35,.5);
    margin: 2px 5px;
    padding: 3px;
    font-size: 11px;
    display: inline-block;
    vertical-align: middle;
  `}
  ${styling}
`;

StyledLabel.defaultProps = {
  bgColor: 'transparent',
  fontWeight: 'normal',
};

export const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  padding: 5px 20px;
  background: ${props => props.theme.blue};
  border: 1px solid ${props => props.theme.blue};
  border-radius: ${props => props.theme.buttonRadius};
  ${styling}

  &:hover {
    background: ${props => props.theme.blueGrey};
    border: 1px solid ${props => props.theme.blueGrey};
  }
`;


export const GeneralContiner = styled.div`
  display: flex;
  min-height: 40px;
  justify-content: center;

  ${styling}
`;

export const FormControl = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;
