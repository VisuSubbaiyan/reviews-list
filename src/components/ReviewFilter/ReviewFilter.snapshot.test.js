import React from 'react';
import ReviewFilter from './ReviewFilter';
import { createMountedComponent, sampleState, mockFunction } from '../../helpers/testUtil';

describe('ReviewFilter should', () => {
  xit('render correctly according to props', () => {
    const mountedReviewFilter = createMountedComponent({
      children: <ReviewFilter {...sampleState} onChange={mockFunction} />
    });

    expect(mountedReviewFilter.htmlRender()).toMatchSnapshot();
    expect(mountedReviewFilter.find('input').length).toEqual(1);
    expect(mountedReviewFilter.find('select').length).toEqual(3);
  });
});