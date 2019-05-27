import React from 'react';
import 'jest-styled-components';

import { createMountedComponent } from '../../../helpers/testUtil';
import Select from './Select';

describe('Select component', () => {
  let mountedSelect;

  beforeEach(() => {
    mountedSelect = createMountedComponent({
      children: <Select onChange={() => null} />
    });
  });

  it('render correctly', () => {
    expect(mountedSelect.htmlRender()).toMatchSnapshot();
    expect(mountedSelect.find('select')).toHaveLength(1);
    expect(mountedSelect.find('option')).toHaveLength(2); // default options
  });

  // it('render disabled component', () => {

  // });

  it('simulate change action', () => {
    mountedSelect.find('select').simulate('change', { target: { value: '2' } });
    expect(mountedSelect.find('select').props().selected).toEqual('2');
  });
})