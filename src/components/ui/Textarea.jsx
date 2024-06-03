import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Textarea = React.forwardRef(({ rows = 2, ...props }, ref) => (
  <TextInput
    {...props}
    ref={ref}
    style={[styles.textarea, { height: 20 * rows }]}
    multiline
    numberOfLines={rows}
  />
));

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});
