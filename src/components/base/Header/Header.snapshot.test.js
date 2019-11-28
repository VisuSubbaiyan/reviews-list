import React from 'react';
import 'jest-styled-components';

import Header from './Header';
import { createMountedComponent, sampleText } from '../../../helpers/testUtil';

describe('<Header /> should', () => {
  it('render correctly', () => {
    const mountedHeader = createMountedComponent({children: <Header text={sampleText} />});

    expect(mountedHeader.htmlRender()).toMatchSnapshot();
    expect(mountedHeader.find('h1').contains(sampleText)).toBeTruthy();
  });
});