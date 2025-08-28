import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';


export default function ProductCard({ product, onPress, onAdd }) {
return (
<TouchableOpacity onPress={onPress} activeOpacity={0.92} style={styles.card}>
<Image source={{ uri: product.image || 'https://picsum.photos/300' }} style={styles.img} />
<View style={styles.info}>
<Text numberOfLines={1} style={styles.title}>{product.title}</Text>
<Text numberOfLines={2} style={styles.desc}>{product.description}</Text>
<View style={styles.row}>
<Text style={styles.price}>${product.price?.toFixed(2) || '0.00'}</Text>
<TouchableOpacity onPress={onAdd} style={styles.addBtn}>
<Text style={styles.addTxt}>Add</Text>
</TouchableOpacity>
</View>
</View>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
card: {
backgroundColor: colors.surface,
borderRadius: 16,
overflow: 'hidden',
marginBottom: 14,
shadowColor: '#000',
shadowOpacity: 0.06,
shadowRadius: 8,
shadowOffset: { width: 0, height: 4 },
elevation: 2
},
img: { width: '100%', height: 160 },
info: { padding: 12 },
title: { fontWeight: '800', fontSize: 16, color: colors.text },
desc: { color: colors.muted, marginTop: 4 },
row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
price: { fontWeight: '800', color: colors.primary, fontSize: 16 },
addBtn: { backgroundColor: colors.primary, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 12 },
addTxt: { color: colors.white, fontWeight: '800' }
});