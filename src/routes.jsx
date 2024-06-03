import React from 'react';
import { Text } from 'react-native';
import { useAuth } from './context/authContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LoginPage } from './screens/Login';

const Stack = createStackNavigator();

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          // Renderizar Outlet cuando el usuario esté autenticado
          <Stack.Screen name="Outlet" component={Outlet} />
        ) : (
          // Redirigir a la página de inicio de sesión si el usuario no está autenticado
          <Stack.Screen name="Login" component={LoginPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
