import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mockFunction } from './helpers/testUtil';

configure({ adapter: new Adapter() });

const localStorageMock = {
  updateLoading: mockFunction,
  loadReviews: mockFunction
};

global.localStorage = localStorageMock;