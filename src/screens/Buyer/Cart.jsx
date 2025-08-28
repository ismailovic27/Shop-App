import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';
import { CartContext } from '../../context/CartContext';

export default function Cart({ navigation }) {
  const { items, summary, updateQty, removeFromCart, clearCart } = useContext(CartContext);
  const entries = Object.values(items);

  if (entries.length === 0) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <AntDesign name="shoppingcart" size={64} color={colors.grayLight} style={{ marginBottom: 12 }} />
        <Text style={{ color: colors.muted, fontSize: 16 }}>Your cart is empty</Text>
      </View>
    );
  }

  const handleDecreaseQty = (id, qty) => {
    if (qty <= 1) {
      removeFromCart(id);
    } else {
      updateQty(id, qty - 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.product.image && (
        <Image source={{ uri: item.product.image }} style={styles.image} />
      )}
      <View style={styles.details}>
        <Text numberOfLines={2} style={styles.title}>{item.product.title}</Text>
        <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => handleDecreaseQty(item.product.id, item.qty)}
          >
            <AntDesign name="minus" size={16} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.qty}>{item.qty}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => updateQty(item.product.id, item.qty + 1)}
          >
            <AntDesign name="plus" size={16} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
            <Text style={styles.remove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        keyExtractor={(i) => i.product.id.toString()}
        contentContainerStyle={{ paddingVertical: 16, paddingBottom: 160 }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <Text style={styles.summary}>
          {`Items: ${summary.totalQty}   •   Subtotal: $${summary.subtotal.toFixed(2)}`}
        </Text>
        <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('Buyer', { screen: 'Checkout' })}
          style={styles.checkoutBtn}
        />
        <TouchableOpacity onPress={clearCart} style={{ marginTop: 12 }}>
          <Text style={styles.clear}>Clear Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  details: { flex: 1, justifyContent: 'space-between' },
  title: { fontWeight: '700', fontSize: 15, color: colors.text, marginBottom: 6 },
  price: { fontWeight: '600', color: colors.primary, marginBottom: 8 },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grayLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty: { minWidth: 28, textAlign: 'center', fontWeight: '900', fontSize: 15 },
  remove: { color: colors.danger, fontWeight: '700', marginLeft: 12 },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -4 },
  },
  summary: {
    textAlign: 'center',
    marginBottom: 14,
    color: colors.text,
    fontWeight: '600',
    fontSize: 15,
  },
  checkoutBtn: { borderRadius: 12 },
  clear: { color: colors.danger, textAlign: 'center', fontWeight: '800', fontSize: 14 },
});
