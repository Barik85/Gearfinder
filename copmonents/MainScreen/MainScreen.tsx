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

type State = {
  weight: number;
  height: number;
  [propName: string]: number;
};

export default class MainScreen extends Component<{}, State> {
  state = {
    weight: 70,
    height: 180
  };

  handleChange = (name: string, value: number): void => {
    this.setState({ [name]: value });
  };

  render() {
    const { weight, height } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <MainMenu
          weight={weight}
          height={height}
          onChange={this.handleChange}
        />
        <Text style={styles.text}>Gearfinder</Text>
      </View>
    );
  }
}
