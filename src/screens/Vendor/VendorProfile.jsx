import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';
import { AuthContext } from '../../context/AuthContext';


export default function VendorProfile() {
const { user, logout } = useContext(AuthContext);
return (
<View style={styles.container}>
<Text style={styles.title}>Vendor Profile</Text>
<Text style={{ color: colors.muted, marginBottom: 20 }}>{user?.name} • {user?.email}</Text>
<Button title="Logout" onPress={logout} />
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.background, padding: 20 },
title: { fontSize: 24, fontWeight: '900', marginBottom: 8, color: colors.text }
});