import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import { NativeRouter } from 'react-router-native';

import MainScreen from './copmonents/MainScreen/MainScreen';

EstyleSheet.build({
  $dark_grey: '#21252D',
  $light_grey: '#282E39',
  $primary_green: '#71A202'
  // for debugging
  // $outline: 1
});

export default function App() {
  return (
    <NativeRouter>
      <MainScreen />
    </NativeRouter>
  );
}
