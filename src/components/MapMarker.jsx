import React from 'react';
import { View, Text } from 'react-native';


export default function MapMarker({ name }) {
return (
<View style={{ backgroundColor: 'white', padding: 6, borderRadius: 8 }}>
<Text style={{ fontWeight: '700' }}>{name}</Text>
</View>
);
}