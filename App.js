import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './src/reducers/AppReducer';
import AppWithNavigationState from './src/navigators/AppNavigator';
import thunk from 'redux-thunk';

class MarketApp extends React.Component {
  store = createStore(
    AppReducer,
    applyMiddleware(thunk)
  );

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MarketApp', () => MarketApp);

export default MarketApp;
