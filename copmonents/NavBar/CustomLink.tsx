import React from 'react';
import { Route, Link } from 'react-router-native';
import EstyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

const styles = EstyleSheet.create({
  text: {
    color: '#fff',
    textTransform: 'uppercase'
  },
  link: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopColor: 'transparent',
    borderTopWidth: 2
  },
  activeLink: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopColor: '$primary_green',
    borderTopWidth: 2
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
