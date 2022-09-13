/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React from 'react';

import {RootStackParamList} from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              Login: 'login',
            },
          },
          CreateAccount: {
            screens: {
              CreateAccount: 'createaccount',
            },
          },
        },
      },
    },
  },
};

export default linking;
