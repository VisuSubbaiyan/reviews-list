import { batch } from 'react-redux';
import reviewServices from '../../services/reviewServices';

const ns = 'applicaion.actions';

export const UPDATE_REVIEWS = `${ns}.updateReviews`;
export const UPDATE_LOADING = `${ns}.updateLoading`;
export const RESET_REVIEWS = `${ns}.resetReviews`;

export const updateLoading = payload => ({
  type: UPDATE_LOADING,
  payload
});

export const updateReviews = payload => ({
  type: UPDATE_REVIEWS,
  payload
});

export const resetReviews = () => ({ type: RESET_REVIEWS });

export const loadReviews = (page, sortBy) => async dispatch => {
  dispatch(updateLoading({ loading: true }));
  // When we work with big applications, need to create axios instance with get, post, update and delete
  const requiredData = await reviewServices(page, sortBy);

  batch(() => {
    dispatch(updateReviews({ ...requiredData, page }));
    dispatch(updateLoading({ loading: false }));
  });
};