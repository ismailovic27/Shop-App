import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//const FAVORITE_PRODUCTS = [
//  { id: '1', name: 'Red Shoes', /* image: require('../../assets/images/product1.jpg'), */ price: '$40' },
//  { id: '2', name: 'Black Bag', /* image: require('../../assets/images/product4.jpg'), */ price: '$80' },
//];

export default function FavoritesScreen() {
  const [favorites] = useState(/*FAVORITE_PRODUCTS*/);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {item.image && <Image source={item.image} style={styles.image} />}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No favorites yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '500' },
  price: { fontSize: 14, color: '#777' },
  empty: { textAlign: 'center', marginTop: 20, color: '#777' },
});
