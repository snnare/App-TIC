import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from './src/context/authContext';

import HomePage from './src/screens/Home';
import Register from './src/screens/Register';
import Tasks from './src/screens/TaskForm'



const Stack = createStackNavigator();

export default function Main() {
  return (
    <AuthProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
