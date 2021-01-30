import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Metrics} from '@config';
import Shape from './Shape';

const FullShape = () => {
  return (
    <View style={styles.container}>
      {/* You can specify for the Shape aboveColor, underColor,
       borderPlace: "bottomLeft-bottomRight-topLeft-topRight",
       height and use the children */}
      <Shape
        aboveColor={Colors.WHITE}
        underColor={Colors.LIGHT_GREY}
        borderPlace="bottomLeft">
        <View style={styles.row}>
          <View style={styles.miniBox} />
          <Text style={styles.text}>Hello</Text>
          <View style={styles.miniBox} />
        </View>
      </Shape>

      <Shape
        aboveColor={Colors.LIGHT_GREY}
        underColor={Colors.WHITE}
        borderPlace="topRight">
        <Text style={styles.text}>Balance</Text>
      </Shape>
    </View>
  );
};

export default FullShape;

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.7,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 5.55,
    shadowRadius: 0.78,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    width: '80%',
  },
  miniBox: {
    backgroundColor: '#101C23',
    width: 35,
    height: 35,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.65,

    elevation: 8,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});
