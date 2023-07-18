import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navegacion from './nagevacion';


export default function App() {
  return (
    <Navegacion />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colores: {
    backgroundColor: '#f1f1e6'
  }
});



