import React from 'react';

import MainWrapper from './MainWrapper';
import { createMountedComponent, sampleText } from '../../helpers/testUtil';

describe('MainWrapper should', () => {
  it('render correctly', () => {
    const mountedMainWrapper = createMountedComponent({
      children: <MainWrapper>{sampleText}</MainWrapper>
    });

    expect(mountedMainWrapper.htmlRender()).toMatchSnapshot();
  });
});