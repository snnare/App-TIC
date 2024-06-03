import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Input = React.forwardRef((props, ref) => (
  <TextInput
    {...props}
    ref={ref}
    style={styles.input}
  />
));

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});
