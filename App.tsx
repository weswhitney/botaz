import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import HomePageButtons from './HomePageButtons';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <HomePageButtons />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App
