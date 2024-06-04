import React, { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../schemas/auth';

function RT() {
  const { signup, errors: registerErrors, isAuthenticated, loading } = useAuth();
  const navigation = useNavigation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    console.log(value); // Muestra los datos en la consola
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigation.navigate('Tasks');
  }, [isAuthenticated]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {registerErrors.map((error, i) => (
        <Text key={i} style={styles.error}>{error}</Text>
      ))}
      <Text style={styles.title}>Register</Text>
      <View>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your name"
          {...register('username')}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="youremail@domain.tld"
          {...register('email')}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="********"
          {...register('password')}
        />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="********"
          {...register('confirmPassword')}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <Text style={styles.footerText}>
        Already Have an Account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Login</Text>
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
  label: {
    fontSize: 16,
    marginBottom: 5,
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

export default RT;
