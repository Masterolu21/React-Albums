import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


import Tournaments from '../components/screens/Tournaments';
import Account from '../components/screens/Account';
import Artists from '../components/screens/Artists';
import Shop from '../components/screens/Shop';
import SignUpForm from '../components/SignUpForm';

export const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
    title: 'Account',
    headerBackTitle: null,
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: {
      title: 'Register'
    }
  },
  },
  Tournaments: {
    screen: Tournaments,
    navigationOptions: {
      title: 'Tournaments',
      headerBackTitle: null,
      headerBackButton: null
    },
  },
  Artists: {
    screen: Artists,
    navigationOptions: {
      title: 'Artists',
      headerBackTitle: null,
      headerBackButton: null
    },
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: 'Shop',
      headerBackTitle: null,
      headerBackButton: null
    },
  },
});
export const Tabs = TabNavigator({
  Account: {
      screen: AccountStack,
      navigationOptions: {
          tabBarlabel: Account,
          tabBarIcon: ({ tintColor }) => <Icon
          name="account-circle"
          size={35}
          color={tintColor}
          renderBackButton={() => (null)}
          />
        }
      },
  Tournaments: {
    screen: Tournaments,
    navigationOptions: {
      tabBarLabel: Tournaments,
      tabBarIcon: ({ tintColor }) => <Icon
        name="tournament"
        size={35}
        color={tintColor}
        renderBackButton={() => (null)}
      />

    }
 },
 Shop: {
   screen: Shop,
   navigationOptions: {
     tabBarLabel: Shop,
       tabBarIcon: ({ tintColor }) => <Icon
       name="shopping-bag"
       size={35}
       color={tintColor}
       renderBackButton={() => (null)}
       />

   }
 },
 Artists: {
   screen: Artists,
   navigationOptions: {
     tabBarLabel: Artists,
       tabBarIcon: ({ tintColor }) => <Icon
       name="shopping-bag"
       size={35}
       color={tintColor}
       renderBackButton={() => (null)}
       />
   }
}
});
