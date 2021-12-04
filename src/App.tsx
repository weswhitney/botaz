import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'
import HomePageButtons from './HomePageButtons'
import PostPairScreen from './PostPairScreen'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(awsconfig);

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

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'string'
    }
  ]
};

export default withAuthenticator(App, { includeGreetings: true, signUpConfig, usernameAttributes: 'email' })
