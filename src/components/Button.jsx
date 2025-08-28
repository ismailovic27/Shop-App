import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';


export default function Button({ title, onPress, style, textStyle, disabled }) {
return (
<TouchableOpacity
activeOpacity={0.85}
onPress={onPress}
disabled={disabled}
style={[styles.btn, disabled && styles.disabled, style]}
>
<Text style={[styles.txt, textStyle]}>{title}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
btn: {
backgroundColor: colors.primary,
paddingVertical: 14,
borderRadius: 14,
alignItems: 'center',
shadowColor: colors.primary,
shadowOpacity: 0.15,
shadowRadius: 10,
shadowOffset: { width: 0, height: 4 }
},
txt: { color: colors.white, fontWeight: '800', fontSize: 16 },
disabled: { opacity: 0.5 }
});