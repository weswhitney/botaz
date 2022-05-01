import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const HomePageButtons = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableHighlight onPress={() => navigation.navigate('CurrentAlerts')}>
        <View style={styles.button}>
          <Text>Current Alerts</Text>
        </View>
      </TouchableHighlight>
      {/* <TouchableHighlight onPress={() => navigation.navigate('FindPair')}>
        <View style={styles.button}>
          <Text>Previous Alerts</Text>
        </View>
      </TouchableHighlight> */}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#9BA17B',
    padding: 15,
    margin: 10,
    paddingHorizontal: 60,
  },
});

export default HomePageButtons;
