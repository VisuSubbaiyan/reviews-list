import React from 'react';
import 'jest-styled-components';

import { createMountedComponent, inputProps, sampleText } from '../../../helpers/testUtil';
import TextInput from './TextInput';

describe('TextInput should', () => {
  let mountedTextInput;

  beforeEach(() => {
    mountedTextInput = createMountedComponent({
      children: <TextInput {...inputProps} />
    });
  });

  it('render correctly', () => {
    expect(mountedTextInput.htmlRender()).toMatchSnapshot();
    expect(mountedTextInput.find('input')).toHaveLength(1);
    expect(mountedTextInput.find('input').props().value).toEqual('sample name');
    expect(mountedTextInput.find('input').props().placeholder).toEqual('sample placeholder');
  });

  it('update text by change action', () => {
    mountedTextInput.find('input').simulate('change', { target: { value: sampleText } });

    expect(mountedTextInput.find('input').props().value).toEqual(sampleText);
  })
});
