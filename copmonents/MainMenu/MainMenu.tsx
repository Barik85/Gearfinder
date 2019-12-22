import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  Image,
  PanResponder,
  Slider,
  Platform
} from 'react-native';

import EstyleSheet from 'react-native-extended-stylesheet';
import settingsIcon from '../../img/settings.png';
import arrowDown from '../../img/arrow_down.png';
import { kgToLbs } from '../../utils/convert';
import { MENU_HEIGHT, MAX_WEIGHT, MIN_WEIGHT } from '../../config/constants';
import RadioButton from './RadioButton';
import maleSymbol from '../../img/male.png';
import femaleSymbol from '../../img/female.png';

const styles = EstyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15
  },
  menu: {
    backgroundColor: '$light_grey',
    overflow: 'hidden',
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 0
  },
  label: {
    color: 'rgba(255, 255, 255, 0.5)'
  },
  text: {
    color: '#fff',
    minWidth: 60
  },
  icon: {
    width: 20,
    height: 20
  },
  iconSmall: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginLeft: 'auto',
    backgroundColor: '$light_grey',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
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
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 15
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
            MENU_HEIGHT - gestureState.dy > MENU_HEIGHT
              ? MENU_HEIGHT
              : MENU_HEIGHT - gestureState.dy;
          if (currentHeight < 0) currentHeight = 0;
          this.animatedHeight.setValue(currentHeight);
        } else {
          let currentHeight =
            gestureState.dy * -1 > MENU_HEIGHT
              ? MENU_HEIGHT
              : gestureState.dy * -1;
          if (currentHeight < 0) currentHeight = 0;
          this.animatedHeight.setValue(currentHeight);
        }
      },
      onPanResponderEnd: (e, gestureState) => {
        if (gestureState.x0 > 300 && Math.abs(gestureState.dy) < 1) {
          this.toggleMenu();
          return;
        }

        const toValue =
          gestureState.dy * -1 > MENU_HEIGHT / 2 ? MENU_HEIGHT : 0;
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

  // handleHeightChange = (value: number): void => {
  //   const { onChange } = this.props;
  //   onChange('height', value);
  // };

  handleGenderChange = (value: boolean): void => {
    const { onChange } = this.props;

    onChange('woman', value);
  };

  render(): JSX.Element {
    const { isMenuOpen } = this.state;
    const { weight, woman } = this.props;
    const lbs = kgToLbs(weight);
    // const feet = cmToFoot(height);

    return (
      <View>
        <View {...this.panResponder.panHandlers} style={styles.header}>
          {!isMenuOpen && (
            <>
              <Image
                source={woman ? femaleSymbol : maleSymbol}
                style={styles.iconSmall}
              />
              <Text style={styles.label}>Weight: </Text>
              <Text style={styles.text}>{weight} kg</Text>
            </>
          )}
          <View style={styles.button} data-item="menu_button">
            {isMenuOpen ? (
              <Image source={arrowDown} style={styles.icon} />
            ) : (
              <Animated.Image
                source={settingsIcon}
                style={{ width: this.iconSize, height: this.iconSize }}
              />
            )}
          </View>
        </View>
        <Animated.View style={[styles.menu, { height: this.animatedHeight }]}>
          <View style={styles.togglerRow}>
            <RadioButton
              label="Male"
              onPress={this.handleGenderChange}
              value={woman}
              itemValue={false}
            />
            <RadioButton
              label="Female"
              onPress={this.handleGenderChange}
              value={woman}
              itemValue
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Weight: </Text>
            <Text style={styles.text}>{weight} kg</Text>
            <Text style={styles.textSmall}> {lbs} lbs</Text>
          </View>

          <Slider
            minimumValue={MIN_WEIGHT}
            maximumValue={MAX_WEIGHT}
            step={1}
            thumbTintColor="#71A202"
            minimumTrackTintColor="#71A202"
            value={weight}
            onValueChange={this.handleWeightChange}
          />

          {/* <View style={styles.row}>
            <Text style={styles.label}>Height: </Text>
            <Text style={styles.text}>{height} cm</Text>
            <Text style={styles.textSmall}> {feet} "</Text>
          </View> */}

          {/* <Slider
            minimumValue={100}
            maximumValue={250}
            step={1}
            thumbTintColor="#71A202"
            minimumTrackTintColor="#71A202"
            value={height}
            onValueChange={this.handleHeightChange}
          /> */}
        </Animated.View>
      </View>
    );
  }
}
