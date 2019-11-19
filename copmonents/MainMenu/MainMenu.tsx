import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableHighlight,
  Easing,
  Image,
  PanResponder,
  Slider,
  Platform
} from 'react-native';

import EstyleSheet from 'react-native-extended-stylesheet';
import settingsIcon from '../../img/settings.png';
import arrowUp from '../../img/arrow_up.png';
import { kgToLbs, cmToFoot } from '../../utils/convert';
import { MENU_HEIGHT } from '../../config/constants';

const styles = EstyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent'
  },
  menu: {
    backgroundColor: '$light_grey',
    overflow: 'hidden',
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 0
  },
  label: {
    color: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
    minWidth: 60
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
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'flex-end'
  },
  textSmall: {
    color: 'rgba(255, 255, 255, 0.25)',
    fontSize: 10,
    minWidth: 50
  },
  togglerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '$primary_green',
    borderWidth: 1,
    width: 200,
    alignSelf: 'center',
    overflow: 'hidden',
    marginVertical: 10
  },
  togglerButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8
  },
  togglerButtonActive: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '$primary_green',
    alignItems: 'center'
  },
  activeText: {
    color: '#fff'
  },
  regularText: {
    color: '$primary_green'
  }
});

type Props = {
  weight: number;
  height: number;
  woman: boolean;
  onChange: Function;
};

type State = {
  isMenuOpen: boolean;
};

export default class MainMenu extends Component<Props, State> {
  animatedHeight: Animated.Value;

  iconSize: Animated.Value;

  panResponder: any;

  constructor(props: Props) {
    super(props);
    this.animatedHeight = new Animated.Value(MENU_HEIGHT);
    this.iconSize = new Animated.Value(20);
    this.state = {
      isMenuOpen: true
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

  handleWeightChange = (value: number): void => {
    const { onChange } = this.props;
    onChange('weight', value);
  };

  handleHeightChange = (value: number): void => {
    const { onChange } = this.props;
    onChange('height', value);
  };

  handleGenderChange = (): void => {
    const { onChange, woman } = this.props;

    onChange('woman', !woman);
  };

  render(): JSX.Element {
    const { isMenuOpen } = this.state;
    const { weight, height, woman } = this.props;
    const lbs = kgToLbs(weight);
    const feet = cmToFoot(height);
    const manButtonStyle = woman
      ? styles.togglerButton
      : styles.togglerButtonActive;
    const womanButtonStyle = woman
      ? styles.togglerButtonActive
      : styles.togglerButton;

    return (
      <View>
        <Animated.View style={[styles.menu, { height: this.animatedHeight }]}>
          <View style={styles.togglerRow}>
            <TouchableHighlight
              style={manButtonStyle}
              onPress={this.handleGenderChange}
            >
              <Text style={woman ? styles.regularText : styles.activeText}>
                Male
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={womanButtonStyle}
              onPress={this.handleGenderChange}
            >
              <Text style={woman ? styles.activeText : styles.regularText}>
                Female
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Weight: </Text>
            <Text style={styles.text}>{weight} kg</Text>
            <Text style={styles.textSmall}> {lbs} lbs</Text>
          </View>

          <Slider
            minimumValue={10}
            maximumValue={200}
            step={1}
            thumbTintColor="#71A202"
            minimumTrackTintColor="#71A202"
            value={weight}
            onValueChange={this.handleWeightChange}
          />

          <View style={styles.row}>
            <Text style={styles.label}>Height: </Text>
            <Text style={styles.text}>{height} cm</Text>
            <Text style={styles.textSmall}> {feet} "</Text>{/*  eslint-disable-line */}
          </View>

          <Slider
            minimumValue={100}
            maximumValue={250}
            step={1}
            thumbTintColor="#71A202"
            minimumTrackTintColor="#71A202"
            value={height}
            onValueChange={this.handleHeightChange}
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
