import EstyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

import { MENU_HEIGHT } from '../config/constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imgHeight = screenHeight - MENU_HEIGHT - 150;

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
  snbImage: {
    height: imgHeight,
    width: imgHeight * 0.21953
  },
  skiImage: {
    height: imgHeight,
    width: imgHeight * 0.30521
  },
  verticalLine: {
    borderRightColor: '#fff',
    borderRightWidth: StyleSheet.hairlineWidth,
    height: imgHeight / 3
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

export default styles;
