import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>
        {user ? `${user.name} • ${user.email}` : 'No user info'}
      </Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 8,
    color: colors.text,
  },
  subtitle: {
    color: colors.muted,
    marginBottom: 20,
    fontSize: 16,
  },
});
