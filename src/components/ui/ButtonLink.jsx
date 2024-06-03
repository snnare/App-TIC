import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ButtonLink = ({ to, children }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(to);
  };

  return (
    <TouchableOpacity style={styles.link} onPress={handlePress}>
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    backgroundColor: '#3f51b5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
