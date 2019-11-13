import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';

import snowboardImg from '../../img/Snowboard.png';

const screenHeight = Dimensions.get('window').height;

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    height: screenHeight / 2,
    width: (screenHeight * 0.21953) / 2,
    alignSelf: 'center'
  }
});

const Snowboard = (): JSX.Element => (
  <View style={styles.container}>
    <Image source={snowboardImg} style={styles.image} />
  </View>
);

export default Snowboard;
