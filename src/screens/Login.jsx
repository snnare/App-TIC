import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/authContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/auth';

export function LoginPage() {
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      // Navigate to tasks screen
      // navigation.navigate('Tasks');
    }
  }, [isAuthenticated]);

  const onSubmit = (data) => signin(data);

  return (
    <View style={styles.container}>
      {loginErrors.map((error, i) => (
        <Text key={i} style={styles.error}>{error}</Text>
      ))}
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        {...register('email')}
      />
      <Text style={styles.error}>{errors.email?.message}</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        {...register('password')}
      />
      <Text style={styles.error}>{errors.password?.message}</Text>

      <Button title="Login" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        {/* Navigate to registration screen */}
        {/* <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Sign up</Text> */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#1E90FF',
  },
});
