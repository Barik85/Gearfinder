import React, { Component, createContext } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import MainMenu from '../MainMenu/MainMenu';
import Snowboard from '../Snowboard/Snowboard';

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$dark_grey',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
  }
});

type State = {
  weight: number;
  height: number;
  woman: boolean;
  [propName: string]: number | boolean;
};

export const StateContext = createContext({});

export default class MainScreen extends Component<{}, State> {
  state = {
    weight: 70,
    height: 180,
    woman: false
  };

  handleChange = (name: string, value: number): void => {
    this.setState({ [name]: value });
  };

  render() {
    const { weight, height, woman } = this.state;

    return (
      <StateContext.Provider value={this.state}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" translucent />
          <MainMenu
            weight={weight}
            height={height}
            woman={woman}
            onChange={this.handleChange}
          />
          <Snowboard weight={weight} woman={woman} />
        </View>
      </StateContext.Provider>
    );
  }
}
