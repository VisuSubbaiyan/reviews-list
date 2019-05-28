import { updateLoading, UPDATE_LOADING } from './reviewsActions';

jest.mock('../../services/reviewServices');

describe('reviewActions ', () => {
  it('updateLoading action creator should return correct action object', () => {
    const updateLoadingAction = updateLoading(true);

    expect(updateLoadingAction.type).toEqual(UPDATE_LOADING);
    expect(updateLoadingAction.payload).toBeTruthy();
  });

  // We can test Async actions with some library fetch-mock, due to time constrains Im ignoring it 
});