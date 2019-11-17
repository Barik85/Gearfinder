import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';

import snowboardImg from '../../img/Snowboard.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    flexDirection: 'row',
    width: screenWidth / 2,
    justifyContent: 'space-between',
    position: 'relative'
  },
  image: {
    height: screenHeight / 2,
    width: (screenHeight * 0.21953) / 2
  },
  verticalLine: {
    borderRightColor: '#fff',
    borderRightWidth: StyleSheet.hairlineWidth,
    height: screenHeight / 6
  },
  rightColumn: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    marginLeft: -30,
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  arrowUp: {
    width: 7,
    height: 7,
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#fff',
    borderRightWidth: StyleSheet.hairlineWidth,
    transform: [{ rotate: '-45deg' }],
    position: 'relative',
    top: 1
  },
  arrowDown: {
    width: 7,
    height: 7,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#fff',
    borderRightWidth: StyleSheet.hairlineWidth,
    transform: [{ rotate: '45deg' }],
    position: 'relative',
    bottom: 1
  },
  text: {
    fontSize: 24,
    color: '$primary_green'
  },
  arrowContaiener: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  row: {
    width: 62,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  textSmall: {
    color: 'rgba(255, 255, 255, 0.25)',
    fontSize: 10,
    paddingBottom: 3
  },
  lineTop: {
    marginTop: -43
  },
  lineBottom: {
    marginBottom: -43
  }
});

type Props = {
  weight: number;
  woman: boolean;
};

const Snowboard = (props: Props): JSX.Element => {
  const { weight, woman } = props;

  const snowboardSize = woman
    ? Math.round(weight * 0.4 + 127)
    : Math.round(weight * 0.3 + 136);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Image source={snowboardImg} style={styles.image} />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.arrowContaiener}>
            <View style={styles.arrowUp} />
            <View style={{ ...styles.verticalLine, ...styles.lineTop }} />
            <View style={styles.row}>
              <Text style={styles.text}>{snowboardSize}</Text>
              <Text style={styles.textSmall}>cm</Text>
            </View>
            <View style={{ ...styles.verticalLine, ...styles.lineBottom }} />
            <View style={styles.arrowDown} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Snowboard;
