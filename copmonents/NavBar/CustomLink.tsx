import React from 'react';
import { Route, Link } from 'react-router-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

const styles = EstyleSheet.create({
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    alignSelf: 'center'
  },
  link: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    flex: 1
  },
  activeLink: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: '$primary_green',
    borderBottomWidth: 2,
    flex: 1
  }
});

type Props = {
  to: string;
  children: string;
};

const CustomLink = ({ to, children }: Props): JSX.Element => (
  <Route
    to={to}
    exact
    // eslint-disable-next-line react/no-children-prop
    children={({ location }) => {
      return (
        <Link
          to={to}
          style={location.pathname === to ? styles.activeLink : styles.link}
        >
          <Text style={styles.text}>{children}</Text>
        </Link>
      );
    }}
  />
);

export default CustomLink;
