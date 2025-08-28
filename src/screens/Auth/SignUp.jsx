import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import { AuthContext } from '../../context/AuthContext';

export default function SignUp({navigation}) {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRoleList, setShowRoleList] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = ['buyer', 'vendor'];

  const handleSignUp = async () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !password.trim() || !role.trim()) {
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
      await signup({ name, email, password, role });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleList(false);
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
          <Text style={styles.title}>Create your account</Text>

          <Input 
            placeholder="Name" 
            value={name} 
            onChangeText={setName} 
          />
          
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

          {/* Role Selector */}
          <TouchableOpacity onPress={() => setShowRoleList(!showRoleList)}>
            <Input 
              placeholder="Role" 
              value={role} 
              editable={false}
              pointerEvents="none"
              rightIcon={
                <Ionicons 
                  name={showRoleList ? "chevron-up" : "chevron-down"} 
                  size={18} 
                  color={colors.gray} 
                />
              }
            />
          </TouchableOpacity>
          {showRoleList && (
            <View style={styles.dropdown}>
              <FlatList
                data={roles}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={styles.dropdownItem} 
                    onPress={() => handleSelectRole(item)}
                  >
                    <Text style={styles.dropdownText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
          
          <Button 
            title={loading ? "Creating Account..." : "Sign Up"} 
            onPress={handleSignUp} 
            disabled={loading}
            style={styles.signUpButton}
          />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')} 
            style={styles.loginLink}
            activeOpacity={0.7}
        >
            <Text style={styles.loginText}>I have an account! 
                <Text style={styles.loginHighlight}> Login</Text>
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
  dropdown: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 12,
    marginTop: -8, // align tightly under input
    marginBottom: 12,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.text,
  },
  signUpButton: {
    marginTop: 24,
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    textAlign: 'center',
    color: colors.muted,
    fontSize: 15,
  },
  loginHighlight: {
    color: colors.primary,
    fontWeight: '700',
  },
});
