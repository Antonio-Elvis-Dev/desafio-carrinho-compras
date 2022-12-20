import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import CartProvider from './src/contexts/CartContexts';

export default function App() {
  return (

    <NavigationContainer>
      <CartProvider>

        <StatusBar
          backgroundColor='#805b5b'
          barStyle="dark-content"
        />
        <Routes />

      </CartProvider>
    </NavigationContainer>
  );
}
