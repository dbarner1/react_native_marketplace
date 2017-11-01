import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { AppNavigator } from '../navigators/AppNavigator';
import productJson from '../api/products.json';
import aislesJson from '../api/aisles.json';
import thunk from 'redux-thunk';

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

var product_array = [];

for(i=0;i<productJson.length;i++) {
  var product = [
    productJson[i].name,
    productJson[i].price,
    productJson[i].image
  ]
  product_array.push(product);
}

const initialProductsAvailable = { productsAvailable: [] };

function productsAvailable(state = initialProductsAvailable, action) {
  switch (action.type) {
    case 'Set Aisle':
      return { ...state, productsAvailable: product_array };
    case 'Purchased All':
      return { ...state, productsAvailable: [] };
    default:
      return state;
  }
}

const aisles_array = aislesJson;

const initialAisles = { aisles: aisles_array };

function aisles(state = initialAisles, action) {
  switch (action.type) {
    case 'Get Aisles':
      return { ...state, aisles: aisles_array };
    case 'Same':
      return { ...state, aisles: [] };
    default:
      return state;
  }
}

var peanutButter = [5934,'Peanut Butter', 50];

function alertUser() {
  alert("You rock for this order!  Though, unfortunately our service is down at the moment.")
}

const initialCart = { cart: [peanutButter] };

function cart(state = initialCart, action) {
  switch (action.type) {
    case 'Add To Cart':
      return { ...state, cart: initialCart.push('The new item!') };
    case 'Purchased All':
      return { ...state, cart: [] };
    default:
      return state;
  }
}



const AppReducer = combineReducers({
  nav,
  auth,
  productsAvailable,
  aisleSelected,
  cart,
  aisles,
});

export default AppReducer;
