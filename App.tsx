import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Nubank } from './src/screen/Nubank/Nubank';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <Nubank />
    </View>
  );
}

