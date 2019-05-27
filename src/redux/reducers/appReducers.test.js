import { appReducer, INITIAL_STATE } from './appReducer';
import { updateLoadingAction, expectedLoadingState } from '../../helpers/testUtil';

jest.mock('../../services/reviewServices');

describe('appRecuder should', () => {
  it('return the initialState', () => {
    expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('trigger UPDATE_LOADING action and update loading in state', () => {
    const updatedState = appReducer(undefined, updateLoadingAction);

    expect(updatedState).toEqual(expectedLoadingState);
  });
});
