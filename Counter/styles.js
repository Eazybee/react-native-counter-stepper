import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  btnText: {
    includeFontPadding: false,
    textAlignVertical: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    height: 30,
  },
});

export const counterStyles = StyleSheet.create({
  btn: {
    paddingVertical: 6,
    width: 60,
  },
  btnText: {
    color: 'black',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minus: {
    alignItems: 'flex-start',
    borderTopRightRadius: 0,
    borderTopEndRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomEndRadius: 0,
  },
  plus: {
    alignItems: 'flex-end',
    borderTopStartRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomStartRadius: 0,
    borderBottomLeftRadius: 0,
  },
  textContainer: {
    backgroundColor: '#1976F7',
    right: 82,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
  },
  text: {
    fontSize: 16,
    color: 'white',
    top: 2,
    fontWeight: 'bold',
  },
});
