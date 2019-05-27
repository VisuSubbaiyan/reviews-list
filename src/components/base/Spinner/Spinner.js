import styled from 'styled-components';

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: transparent;
  border: 3px solid ${props => props.theme.mediumGrey};
  animation: rotation 1s infinite linear;

  &::before {
    content:"";
    display: block;
    position: absolute;
    left: -3px;
    top: -3px;
    height: 100%;
    width: 100%;
    border-top: 3px solid ${props => props.theme.primary};
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    border-radius: 100%;
  }

  @keyframes rotation {
   from {transform: rotate(0deg);}
   to {transform: rotate(359deg);}
  }
`;

export default Spinner;
