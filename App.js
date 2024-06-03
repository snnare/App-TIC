import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import C01 from './src/components/C01';


import { PaperProvider } from 'react-native-paper';



export default function Main() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <C01></C01>
    </View>
    </PaperProvider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
