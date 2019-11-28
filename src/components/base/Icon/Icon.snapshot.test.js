import React from 'react';
import 'jest-styled-components';

import { createMountedComponent } from '../../../helpers/testUtil';
import Icon from './Icon';
import {ReactComponent as UserIcon} from '../../ReviewGroup/images/user.svg';

describe('Icon should', () => {
  it('render correctly', () => {
    const mountedIcon = createMountedComponent({
      children: <Icon icon={UserIcon} />
    });

    expect(mountedIcon.htmlRender()).toMatchSnapshot();
    expect(mountedIcon.find('i')).toHaveLength(1);
    expect(mountedIcon.find('svg')).toHaveLength(1);
  });
})
