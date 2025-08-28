import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';
import { CartContext } from '../../context/CartContext';

const FALLBACK_IMAGE =
  'https://via.placeholder.com/600x400.png?text=No+Image';

export default function ProductDetail({ route }) {
  const { addToCart } = useContext(CartContext);
  const product = route?.params?.product || {};

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || FALLBACK_IMAGE }}
        style={styles.img}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{product.title || 'Unnamed Product'}</Text>
        <Text style={styles.price}>
          ${product.price ? product.price.toFixed(2) : '0.00'}
        </Text>
        <Text style={styles.desc}>
          {product.description || 'No description available.'}
        </Text>
        <Button
          title="Add to Cart"
          onPress={() => addToCart(product, 1)}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  img: {
    width: '100%',
    height: 280,
    backgroundColor: colors.grayLight,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.text,
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: colors.primary,
    marginVertical: 8,
  },
  desc: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
