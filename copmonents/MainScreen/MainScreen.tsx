import React, { Component, createContext } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import { Route } from 'react-router-native';
import MainMenu from '../MainMenu/MainMenu';
import NavBar from '../NavBar/NavBar';
import Snowboard from '../Snowboard/Snowboard';
import Ski from '../Ski/Ski';

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$dark_grey',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
  },
  wrapper: {
    flex: 1
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
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent />
            <NavBar />
            <Route
              path="/"
              exact
              render={props => (
                <Snowboard {...props} weight={weight} woman={woman} />
              )}
            />
            <Route
              path="/ski"
              render={props => <Ski {...props} weight={weight} woman={woman} />}
            />

            <MainMenu
              weight={weight}
              height={height}
              woman={woman}
              onChange={this.handleChange}
            />
          </View>
        </View>
      </StateContext.Provider>
    );
  }
}
