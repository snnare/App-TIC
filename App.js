import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from './src/context/authContext';

import HomePage from './src/screens/Home';
import Register from './src/screens/Register';
import { TaskFormPage } from './src/screens/TaskForm';
import { LoginPage } from './src/screens/Login';
import { ProtectedRoute } from './src/routes';
import { TasksPage } from './src/screens/TaskPage';


const Stack = createStackNavigator();

export default function Main() {
  return (
    <AuthProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="Protected" component={ProtectedRoute} />
        <Stack.Screen name="Tasks" component={TasksPage} />
        <Stack.Screen name="AddTask" component={TaskFormPage} />
        <Stack.Screen name="TaskDetails" component={TaskFormPage} />
        <Stack.Screen name="Profile" component={() => <h1>Profile</h1>} />
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
