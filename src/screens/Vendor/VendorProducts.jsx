import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../constants/colors';
import { VendorContext } from '../../context/VendorContext';
import ProductCard from '../../components/ProductCard';


export default function VendorProducts() {
const { myProducts } = useContext(VendorContext);
return (
<View style={styles.container}>
{myProducts.length === 0 ? (
<Text style={{ color: colors.muted }}>No products yet</Text>
) : (
<FlatList
data={myProducts}
keyExtractor={(i) => i.id.toString()}
contentContainerStyle={{ padding: 16 }}
renderItem={({ item }) => (
<ProductCard product={item} onPress={() => {}} onAdd={() => {}} />
)}
/>
)}
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.background, padding: 16 }
});