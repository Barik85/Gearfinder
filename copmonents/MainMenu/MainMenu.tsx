import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableHighlight,
  Easing,
  Image,
  PanResponder,
  Slider
} from 'react-native';

import EstyleSheet from 'react-native-extended-stylesheet';
import settingsIcon from '../../img/settings.png';
import arrowUp from '../../img/arrow_up.png';

const styles = EstyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent'
  },
  menu: {
    backgroundColor: '$light_grey',
    overflow: 'hidden'
  },
  label: {
    color: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center'
  },
  icon: {
    width: 20,
    height: 20
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginRight: 15,
    backgroundColor: '$light_grey',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    minWidth: 34,
    minHeight: 30
  }
});

const MENU_HEIGHT = 100;

type State = {
  isMenuOpen: boolean;
};

export default class MainMenu extends Component<{}, State> {
  animatedHeight: Animated.Value;

  iconSize: Animated.Value;

  panResponder: any;

  constructor(props: any) {
    super(props);
    this.animatedHeight = new Animated.Value(0);
    this.iconSize = new Animated.Value(20);
    this.state = {
      isMenuOpen: false
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const { isMenuOpen } = this.state;
        if (isMenuOpen) {
          let currentHeight =
            MENU_HEIGHT - gestureState.dy * -1 > MENU_HEIGHT
              ? MENU_HEIGHT
              : MENU_HEIGHT - gestureState.dy * -1;
          if (currentHeight < 0) currentHeight = 0;
          this.animatedHeight.setValue(currentHeight);
        } else {
          let currentHeight =
            gestureState.dy > MENU_HEIGHT ? MENU_HEIGHT : gestureState.dy;
          if (currentHeight < 0) currentHeight = 0;
          this.animatedHeight.setValue(currentHeight);
        }
      },
      onPanResponderEnd: (e, gestureState) => {
        const toValue = gestureState.dy > MENU_HEIGHT / 2 ? MENU_HEIGHT : 0;
        Animated.timing(this.animatedHeight, {
          toValue,
          duration: 200,
          easing: Easing.ease
        }).start(() => {
          this.setState({ isMenuOpen: toValue > 0 });
        });
      }
    });
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.iconSize.setValue(17);
      Animated.spring(this.iconSize, {
        toValue: 20,
        friction: 2
      }).start();
    }, 200);
  }

  toggleMenu = (): void => {
    const { isMenuOpen } = this.state;
    if (isMenuOpen) {
      Animated.timing(this.animatedHeight, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease
      }).start(() => {
        this.setState({ isMenuOpen: false });
      });
    } else {
      Animated.timing(this.animatedHeight, {
        toValue: MENU_HEIGHT,
        duration: 500,
        easing: Easing.ease
      }).start(() => {
        this.setState({ isMenuOpen: true });
      });
    }
  };

  render(): JSX.Element {
    const { isMenuOpen } = this.state;

    return (
      <View>
        <Animated.View style={[styles.menu, { height: this.animatedHeight }]}>
          <Text style={styles.label}>Weight</Text>
          <Slider
            minimumValue={10}
            maximumValue={200}
            thumbTintColor="#71A202"
          />
        </Animated.View>
        <View {...this.panResponder.panHandlers} style={styles.wrapper}>
          <TouchableHighlight onPress={this.toggleMenu} style={styles.button}>
            {isMenuOpen ? (
              <Image source={arrowUp} style={styles.icon} />
            ) : (
              <Animated.Image
                source={settingsIcon}
                style={{ width: this.iconSize, height: this.iconSize }}
              />
            )}
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
