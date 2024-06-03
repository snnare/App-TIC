import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from 'react-native';


export  default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Text style={styles.title}>React Tasks</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
            fugit doloremque molestias recusandae labore repellat amet dicta tempore
            necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
            quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
            ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
            officia accusantium vitae doloremque, molestias modi.
          </Text>
          <Button
            title="Get Started"
            color="#6B7280"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#1C1C1E',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#A1A1AA',
    marginBottom: 20,
  },
});