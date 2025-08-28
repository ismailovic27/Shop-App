import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import { AuthContext } from '../../context/AuthContext';

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
      if (!email.trim() || !password.trim()) {
        Alert.alert("Missing Information", "All fields are required.");
        return;
      }
  
      // Optional: simple email format check
      if (!/\S+@\S+\.\S+/.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return;
      }
  
      try {
        setLoading(true);
        await login({ email, password });
      } finally {
        setLoading(false);
      }
    };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back</Text>

          <Input 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail} 
            autoCapitalize="none" 
            keyboardType="email-address"
          />

          <Input 
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry={!showPassword}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye" : "eye-off"} 
                  size={15} 
                  color={showPassword ? colors.primary : colors.gray} 
                />
              </TouchableOpacity>
            }
          />

          <TouchableOpacity 
          title={loading ? 'Logging in...' : 'Login'}
          style={styles.loginButton} 
          onPress={handleLogin}
          disabled={loading}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          

          <TouchableOpacity 
            onPress={() => navigation.navigate('SignUp')} 
            style={styles.signUpLink}
            activeOpacity={0.7}
          >
            <Text style={styles.signUpText}>
              No account? <Text style={styles.signUpHighlight}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 32,
    color: colors.text,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    gap: 14,
    marginTop: 32,
  },
  loginText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    marginTop: 20,
  },
  signUpText: {
    textAlign: 'center',
    color: colors.muted,
    fontSize: 15,
  },
  signUpHighlight: {
    color: colors.primary,
    fontWeight: '700',
  },
});
