import React from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const HomePageButtons = () => {
  return (
    <>
      <TouchableHighlight onPress={() => Alert.alert('Post Button pressed')}>
        <View style={styles.button}>
          <Text>Post a pair</Text>
        </View>
      </TouchableHighlight><TouchableHighlight onPress={() => Alert.alert('Find Button pressed')}>
        <View style={styles.button}>
          <Text>Find a pair</Text>
        </View>
      </TouchableHighlight>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#00cec9",
    padding: 15,
    margin: 10,
    paddingHorizontal: 60
  }
});

export default HomePageButtons
