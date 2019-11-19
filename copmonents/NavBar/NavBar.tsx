import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';
import CustomLink from './CustomLink';

const styles = EstyleSheet.create({
  nav: {
    flexDirection: 'row',
    backgroundColor: '$light_grey'
  }
});

const NavBar = (): JSX.Element => (
  <View style={styles.nav}>
    <CustomLink to="/">snb</CustomLink>
    <CustomLink to="/ski">ski</CustomLink>
  </View>
);

export default NavBar;
