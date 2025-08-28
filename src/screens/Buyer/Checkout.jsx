import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../../context/CartContext';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';


export default function Checkout() {
const { summary } = useContext(CartContext);


const onPay = () => {
alert('Payment flow placeholder. Total: $' + summary.subtotal.toFixed(2));
};


return (
<View style={styles.container}>
<Text style={styles.title}>Checkout</Text>
<Text style={{ color: colors.muted, marginBottom: 16 }}>Total: ${summary.subtotal.toFixed(2)}</Text>
<Button title="Pay Now" onPress={onPay} />
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.background, padding: 20 },
title: { fontSize: 24, fontWeight: '900', marginBottom: 8, color: colors.text }
});