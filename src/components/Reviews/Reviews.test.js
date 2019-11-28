import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'jest-styled-components';

import Reviews from './Reviews';

import { createMountedComponent } from '../../helpers/testUtil';
import { appReducer, INITIAL_STATE } from '../../redux/reducers';

jest.mock('../../services/reviewServices');

const store = createStore(appReducer, INITIAL_STATE, applyMiddleware(thunk));

describe('<Reviews /> should', () => {
  let mountedReview;

  beforeEach(() => {
    mountedReview = createMountedComponent({
      children: (
        <Provider store={store}>
          <Reviews loading={false} />
        </Provider>
      )
    });
  });

  it('render correctly with list of reviews', (done) => {
    setTimeout(() => {
      expect(mountedReview.htmlRender()).toMatchSnapshot();
      expect(mountedReview.find('Reviews').length).toEqual(1);
      expect(mountedReview.find('ReviewFilter').length).toEqual(1);

      done();
    });
  });

  xit('update reviews, hasMore in props', (done) => {
    setTimeout(() => {
      const reviewsInstance = mountedReview.find('Reviews').instance();

      expect(reviewsInstance.props.hasMore).toBeTruthy();
      expect(reviewsInstance.props.reviews.length).toEqual(20);

      done();
    });
  });
});
