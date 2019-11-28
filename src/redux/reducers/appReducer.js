import {
  UPDATE_LOADING,
  UPDATE_REVIEWS,
  RESET_REVIEWS
} from '../actions';

/**
 * `INITIAL_STATE` is application initial state
 */
export const INITIAL_STATE = {
  page: 1,
  loading: false,
  reviews: [],
  hasMore: false
};

/**
 * `appReducer` - application reducer
 * @param {Object} state - application state
 * @param {Object} action - action object
 */
export const appReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_LOADING: {
      const { loading } = payload;

      return ({ ...state, loading });
    }

    case UPDATE_REVIEWS: {
      const { reviews, hasMore, page } = payload;
      return ({ ...state, hasMore, page, reviews: [...state.reviews, ...reviews] });
    }

    case RESET_REVIEWS: {
      return ({ ...state, reviews: [] });
    }

    default:
      return state;
  }
};
