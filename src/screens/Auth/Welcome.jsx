import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { images } from '../../constants/images';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={images.banner} style={styles.banner} resizeMode="cover" />

      <Text style={styles.title}>Welcome to NovaShop</Text>
      <Text style={styles.subtitle}>Shop green. Sell smart.</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.createAccountButton} 
        onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  banner: {
    width: '100%',
    height: 220,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: colors.muted,
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
     // If using RN 0.71+; otherwise use margin manually on buttons
  },
  createAccountButton: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  loginButton: {
    backgroundColor: colors.primary,   // iOS blue
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    gap: 14,
    marginTop: 32,

  },
  createAccountButton: {
    backgroundColor: colors.background,   // iOS green
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 2,               // add border if you want
    borderColor: colors.primary,       // customize border color
  },
  loginText: {
    color: colors.lightPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  createText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
