import React from 'react';
import { StyledIcon } from '../Base.styled';

/**
 * `Icon` render icon component which passed
 * 
 * @example:
 *  <Icon icon={UserIcon} />
 */
const Icon = props => {
  const RenderComponent = props.icon;

  return (
    <StyledIcon {...props} >
        <RenderComponent />
    </StyledIcon>
  )
};

Icon.defaultProps = {
  size: 'm'
};

export default Icon;
