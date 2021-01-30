import React from 'react';
import {View} from 'react-native';
import styles from './MainScreenStyles';
import {FullShape} from '@common';

const Main = () => {
  return (
    <View style={styles.container}>
      <FullShape />
    </View>
  );
};

export default Main;
