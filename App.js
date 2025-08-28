import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { colors } from './src/constants/colors';
import { AuthProvider } from './src/context/AuthContext';
import { CartProvider } from './src/context/CartContext';
import RootNavigator from './src/navigation/RootNavigator';
export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <View backgroundColor={colors.primary}>
            <StatusBar style="light"/>
          </View>
          <RootNavigator />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}