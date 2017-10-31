import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import SpecialsScreen from '../screens/SpecialsScreen';
import BrowseScreen from '../screens/BrowseScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

export const AppNavigator = TabNavigator({
  Specials: { screen: SpecialsScreen },
  Browse: { screen: BrowseScreen },
  Checkout: { screen: CheckoutScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
