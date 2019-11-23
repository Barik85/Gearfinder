import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import { View, Text, TouchableOpacity } from 'react-native';

const styles = EstyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '$primary_green',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7
  },
  circleChecked: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '$primary_green'
  },
  label: {
    color: '#fff'
  },
  activeLabel: {
    color: '$primary_green'
  }
});

type Props = {
  label: string;
  onPress: Function;
  value: any;
  itemValue: any;
};

const RadioButton = ({ label, onPress, value, itemValue }: Props) => {
  const handlePress = (): void => onPress(itemValue);

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.circle} onPress={handlePress}>
        {value === itemValue ? <View style={styles.circleChecked} /> : null}
      </TouchableOpacity>
      <Text style={value === itemValue ? styles.activeLabel : styles.label}>
        {label}
      </Text>
    </View>
  );
};

export default RadioButton;
