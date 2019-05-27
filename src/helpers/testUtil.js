import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { prettyPrint } from 'html';

import { theme } from './config';
import { UPDATE_LOADING } from '../redux/actions';

export const createMountedComponent = ({ children, isShallow }) => {
  const component = (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
  const mountedComponent = isShallow ? shallow(component) : mount(component);
  mountedComponent.htmlRender = () => prettyPrint(mountedComponent.html(), { indent_size: 2 });

  return mountedComponent;
};

export const sampleText = 'sample text';
export const mockFunction = jest.fn(value => value);

export const inputProps = {
  value: 'sample name',
  onChange: mockFunction,
  placeholder: 'sample placeholder'
};

export const sampleState = {
  search: '',
  stars: 5,
  groupBy: 'day',
  sortBy: 'desc',
  diableSort: false
};

export const updateLoadingAction = {
  type: UPDATE_LOADING,
  payload: { loading: true }
};

export const expectedLoadingState = {
  page: 1,
  loading: true,
  reviews: [],
  hasMore: false
}
