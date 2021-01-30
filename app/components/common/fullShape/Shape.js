import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '@config';

// I made this component because if the is a FlatList and we
//  want to use these shapes we just give condition on index...
const Shape = ({
  children,
  aboveColor = Colors.WHITE,
  underColor = Colors.LIGHT_GREY,
  borderPlace = 'bottomLeft',
  height = 120,
  containerStyle,
  aboveStyle,
  underStyle,
}) => {
  // Adjust border base on borderPlace props and
  //  add it to the array of the above object
  const setBorder = (borderPlace) => {
    switch (borderPlace) {
      case 'bottomLeft':
        return {borderBottomLeftRadius: 60};
        break;
      case 'bottomRight':
        return {borderBottomRightRadius: 60};
        break;
      case 'topLeft':
        return {borderTopLeftRadius: 60};
        break;
      case 'topRight':
        return {borderTopRightRadius: 60};
        break;
      default:
        return {};
        break;
    }
  };

  return (
    <View style={{...styles.container, height, ...containerStyle}}>
      {/* Above object */}
      <View
        style={[
          {
            backgroundColor: aboveColor,
          },
          aboveStyle,
          setBorder(borderPlace),
          styles.aboveObject,
        ]}>
        {children}
      </View>
      {/* Under Object */}
      <View
        style={[
          {
            backgroundColor: underColor,
          },
          underStyle,
          styles.underObject,
        ]}
      />
    </View>
  );
};

export default Shape;

const styles = StyleSheet.create({
  container: {},
  aboveObject: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  underObject: {
    ...StyleSheet.absoluteFillObject,
  },
});
