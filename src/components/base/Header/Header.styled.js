import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.theme.black};
  position: fixed;
  display: flex;
  width: 100vw;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  min-height: 60px;
  z-index: 1;
`;

export default StyledHeader;
