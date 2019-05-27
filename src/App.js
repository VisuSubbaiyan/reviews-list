import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

import MainWrapper from './components/MainWrapper';
import Reviews from './components/Reviews';

import { theme } from './helpers/config';
import { Header } from './components/base';
import { INITIAL_STATE, appReducer } from './redux/reducers';

const middleware = applyMiddleware(thunk);
const devTool = (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

const store = compose(middleware, devTool)(createStore)(appReducer, INITIAL_STATE);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <Header text="Reviews" />
            <Reviews />
          </MainWrapper>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
