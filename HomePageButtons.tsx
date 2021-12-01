import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const HomePageButtons = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableHighlight onPress={() => navigation.navigate('PostPair')}>
        <View style={styles.button}>
          <Text>post a pair</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => Alert.alert('Find Button pressed')}>
        <View style={styles.button}>
          <Text>find a pair</Text>
        </View>
      </TouchableHighlight>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#9BA17B",
    padding: 15,
    margin: 10,
    paddingHorizontal: 60
  }
});

export default HomePageButtons
