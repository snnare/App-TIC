import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function Label({ children }) {
  return (
    <Text style={styles.label}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: '#ccc',
  },
});
