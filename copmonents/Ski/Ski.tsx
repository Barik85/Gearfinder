import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles/styles';

import skiImg from '../../img/Ski.png';

type Props = {
  weight: number;
  woman: boolean;
};

const Ski = (props: Props): JSX.Element => {
  const { weight, woman } = props;

  const skiSize = woman
    ? Math.round(weight * 0.4 + 127)
    : Math.round(weight * 0.3 + 140);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Image source={skiImg} style={styles.skiImage} />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.arrowContaiener}>
            <View style={styles.arrowUp} />
            <View style={{ ...styles.verticalLine, ...styles.lineTop }} />
            <View style={styles.row}>
              <Text style={styles.text}>{skiSize}</Text>
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

export default Ski;
