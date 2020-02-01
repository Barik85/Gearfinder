import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles/styles';

import snowboardImg from '../../img/Snowboard.png';

type Props = {
  weight: number;
  woman: boolean;
};

const Snowboard = (props: Props): JSX.Element => {
  const { weight, woman } = props;

  let snowboardSize = woman
    ? Math.round(weight * 0.32 + 127)
    : Math.round(weight * 0.3831 + 127.1319);

  if (weight <= 35) {
    snowboardSize = Math.round(weight * 2.5 + 45);
    // } else if (weight > 93) {
    //   Math.round(weight * 0.3 + 136);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Image source={snowboardImg} style={styles.snbImage} />
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
