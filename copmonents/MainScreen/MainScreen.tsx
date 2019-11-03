import React from 'react';
import { View, Text } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import MainMenu from '../MainMenu/MainMenu';

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$dark_grey'
  },
  text: {
    color: '$primary_green'
  }
});

const MainScreen = (): JSX.Element => (
  <View style={styles.container}>
    <MainMenu />
    <Text style={styles.text}>Gearfinder</Text>
  </View>
);

export default MainScreen;
