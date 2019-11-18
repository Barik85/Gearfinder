import React from 'react';
import { Link } from 'react-router-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';

const styles = EstyleSheet.create({
  nav: {
    flexDirection: 'row'
  }
});

const NavBar = (): JSX.Element => (
  <View style={styles.nav}>
    <Link to="/">
      <Text>snowboard</Text>
    </Link>
    <Link to="/ski">
      <Text>ski</Text>
    </Link>
  </View>
);

export default NavBar;
