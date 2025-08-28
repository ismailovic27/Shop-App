import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';


export default function Header({ title, right }) {
return (
<View style={styles.wrap}>
<Text style={styles.title}>{title}</Text>
{right}
</View>
);
}


const styles = StyleSheet.create({
wrap: { paddingTop: 56, paddingBottom: 14, paddingHorizontal: 16, backgroundColor: colors.primary, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
title: { color: colors.white, fontSize: 20, fontWeight: '900' }
});