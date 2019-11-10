import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import MainMenu from '../MainMenu/MainMenu';

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$dark_grey',
    paddingTop: StatusBar.currentHeight
  },
  text: {
    color: '$primary_green'
  }
});

export default class MainScreen extends Component {
  state = {
    weight: 10
  };

  handleInputChange = (e: React.ChangeEvent) => {
    const {}
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <MainMenu />
        <Text style={styles.text}>Gearfinder</Text>
      </View>
    );
  }
}
