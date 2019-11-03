import React, { Component } from 'react';
import { View, Text, Animated, TouchableHighlight, Easing } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';

const styles = EstyleSheet.create({
  menu: {
    backgroundColor: '$light_grey',
    overflow: 'hidden'
  },
  text: {
    color: '#fff'
  }
});

type State = {
  isMenuOpen: boolean;
};

export default class MainMenu extends Component<{}, State> {
  animatedValue: Animated.Value;

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = (): void => {
    const { isMenuOpen } = this.state;
    if (isMenuOpen) {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease
      }).start(() => {
        this.setState({ isMenuOpen: false });
      });
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 100,
        duration: 500
      }).start(() => {
        this.setState({ isMenuOpen: true });
      });
    }
  };

  render(): JSX.Element {
    return (
      <View>
        <TouchableHighlight onPress={this.toggleMenu}>
          <Text style={styles.text}>Settings</Text>
        </TouchableHighlight>
        <Animated.View style={[styles.menu, { height: this.animatedValue }]}>
          <Text style={styles.text}>the menu</Text>
        </Animated.View>
      </View>
    );
  }
}
