import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { AppNavigator } from '../navigators/AppNavigator';
import productJson from '../api/products.json';

const firstAction = AppNavigator.router.getActionForPathAndParams('Browse');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
//const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  //secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Start Shopping':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Browse'}),
        state
      );
      break;
    case 'Checkout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Checkout' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

const initialAuthState = { isLoggedIn: true };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const initialProductsAvailable = { products_available: [] };

var product_array = [];

for(i=0;i<productJson.length;i++) {
  var product = [
    productJson[i].name,
    productJson[i].price,
    productJson[i].image
  ]
  product_array.push(product);
}

function productsAvailable(state = initialProductsAvailable, action) {
  switch (action.type) {
    case 'Needs to be Setup':
      return { ...state, products_available: products_array };
    case 'Purchased All':
      return { ...state, products_available: [] };
    default:
      return state;
  }
}

const initialAisleSelected = { aisleSelected: 'Pick an aisle above to start shopping!' };

function aisleSelected(state = initialAisleSelected, action) {
  switch(action.type) {
    case 'Prepared Foods':
      return { ...state, aisleSelected: 'Prepared Foods' };
    case 'Dairy':
      return { ...state, aisleSelected: 'Dairy' };
    case 'Candy':
      return { ...state, aisleSelected: 'Candy' };
    case 'Veggies':
      return { ...state, aisleSelected: 'Prepared Foods' };
    case 'Meats':
      return { ...state, aisleSelected: 'Meats' };
    case 'Canned Goods':
      return { ...state, aisleSelected: 'Canned GOods' };
  default:
  return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  productsAvailable,
  aisleSelected,
});

export default AppReducer;
