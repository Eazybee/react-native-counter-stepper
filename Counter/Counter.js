import React from 'react';
import Proptypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import Button from './Button';
import {counterStyles as styles} from './styles';

const PLUS = '+';
const MINUS = '-';

const Counter = props => {
  const {
    value,
    minText,
    maxText,
    minValue,
    maxValue,
    step,
    onValueChange,
    activeBackgroundColor,
    style,
    buttonStyle,
    buttonnTextStyle,
    labelStyle,
    labelTextStyle,
  } = props;

  const handleCounter = (changeVal, change) => {
    const newValue = value + changeVal;
    if (newValue > maxValue || newValue < minValue) {
      return;
    }

    onValueChange(newValue, change);
  };

  const checKDisable = change =>
    change === PLUS ? value === maxValue : value === minValue;
  return (
    <View
      style={StyleSheet.flatten([
        {
          flexDirection: 'row',
          width: 122,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 2,
          shadowOpacity: 0.35,
          elevation: 4,
        },
        style,
      ])}>
      <View style={styles.btnContainer}>
        <Button
          title={minText}
          onPress={() => handleCounter(-step, MINUS)}
          buttonStyle={StyleSheet.flatten([
            styles.btn,
            buttonStyle,
            styles.minus,
          ])}
          textStyle={StyleSheet.flatten([styles.btnText, buttonnTextStyle])}
          disabled={checKDisable(MINUS)}
          underlayColor={activeBackgroundColor}
        />
        <Button
          title={maxText}
          onPress={() => handleCounter(step, PLUS)}
          buttonStyle={StyleSheet.flatten([
            styles.btn,
            buttonStyle,
            styles.plus,
          ])}
          textStyle={StyleSheet.flatten([styles.btnText, buttonnTextStyle])}
          disabled={checKDisable(PLUS)}
          underlayColor={activeBackgroundColor}
        />
      </View>
      <View style={StyleSheet.flatten([styles.textContainer, labelStyle])}>
        <Text style={StyleSheet.flatten([styles.text, labelTextStyle])}>
          {value}
        </Text>
      </View>
    </View>
  );
};

Counter.defaultProps = {
  minText: '-',
  maxText: '+',
  minValue: Number.MIN_SAFE_INTEGER,
  maxValue: Number.MAX_SAFE_INTEGER,
  step: 1,
};

Counter.propTypes = {
  value: Proptypes.number,
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  minText: Proptypes.string,
  maxText: Proptypes.string,
  step: Proptypes.number,
  style: Proptypes.object,
  onValueChange: Proptypes.func,
  activeBackgroundColor: Proptypes.string,
  buttonStyle: Proptypes.object,
  buttonnTextStyle: Proptypes.object,
  labelStyle: Proptypes.object,
  labelTextStyle: Proptypes.object,
};

export default Counter;
