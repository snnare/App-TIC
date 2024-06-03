import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
