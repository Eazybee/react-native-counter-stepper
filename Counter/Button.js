import React from 'react';
import Proptypes from 'prop-types';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {buttonStyles as styles} from './styles';

const Button = props => {
  const {
    onPress,
    title,
    buttonStyle,
    textStyle,
    disabled,
    underlayColor,
    ...rest
  } = props;

  return (
    <TouchableHighlight
      underlayColor={underlayColor || 'rgba(40,121,255,0.94)'}
      onPress={onPress}
      style={StyleSheet.create([
        styles.btn,
        {
          opacity: disabled ? 0.5 : 1,
        },
        buttonStyle,
      ])}
      disabled={disabled}
      {...rest}>
      <Text style={StyleSheet.flatten([styles.btnText, textStyle])}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onPress: Proptypes.func,
  title: Proptypes.string,
  textStyle: Proptypes.object,
  buttonStyle: Proptypes.object,
  underlayColor: Proptypes.string,
};

export default Button;
