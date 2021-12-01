import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'
import HomePageButtons from './HomePageButtons'
import PostPairScreen from './PostPairScreen'

const HomeScreen = () => {
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <HomePageButtons />
      </View>
    )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'home'}} />
        <Stack.Screen name="PostPair" component={PostPairScreen} options={{title: 'swap'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
