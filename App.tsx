import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import MainScreen from './copmonents/MainScreen/MainScreen';

EstyleSheet.build({
  $dark_grey: '#21252D',
  $light_grey: '#282E39',
  $primary_green: '#71A202'
});

export default function App() {
  return <MainScreen />;
}
