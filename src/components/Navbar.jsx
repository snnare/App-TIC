import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/authContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

;
import { TaskFormPage } from './src/screens/TaskForm';
import { LoginPage } from './src/screens/Login';
import { TasksPage } from './src/screens/TaskPage';



const Stack = createStackNavigator();

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tasks" component={TasksPage} />
        <Stack.Screen name="AddTask" component={TaskFormPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Task Manager</Text>
      <Button
        title={isAuthenticated ? 'Tasks' : 'Login'}
        onPress={() => navigation.navigate(isAuthenticated ? 'Tasks' : 'Login')}
      />
    </View>
  );
}
