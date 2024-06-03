import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Message({ message }) {
  return (
    <View style={styles.message}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#d32f2f',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 5,
  },
  messageText: {
    color: '#f5f5f5',
    fontSize: 14,
  },
});
