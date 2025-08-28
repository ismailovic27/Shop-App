import { useContext, useMemo, useState } from 'react';
import {
    FlatList,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import ProductCard from '../../components/ProductCard';
import { colors } from '../../constants/colors';
import { CartContext } from '../../context/CartContext';

const DEMO_PRODUCTS = [
  { id: 1, title: 'Green Hoodie', description: 'Cozy & organic cotton', price: 39.99, image: '', category: 'Clothing' },
  { id: 2, title: 'Trail Sneakers', description: 'Lightweight everyday', price: 59.5, image: '', category: 'Shoes' },
  { id: 3, title: 'Windbreaker', description: 'All-weather jacket', price: 79.0, image: '', category: 'Jackets' },
];

const CATEGORIES = ['All', 'Clothing', 'Shoes', 'Jackets'];

export default function Home({ navigation }) {
  const { addToCart } = useContext(CartContext);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const filteredProducts = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase();
    let results = DEMO_PRODUCTS.filter(
      p =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
    if (category !== 'All') {
      results = results.filter(p => p.category === category);
    }
    return results;
  }, [query, category]);

  const handleRefresh = async () => {
    setRefreshing(true);
    // In production, fetch updated products here
    await new Promise(res => setTimeout(res, 600));
    setRefreshing(false);
  };

  const renderCategoryChip = (item) => (
    <TouchableOpacity
      key={item}
      onPress={() => setCategory(item)}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[styles.chip, category === item && styles.chipActive]}
    >
      <Text style={[styles.chipText, category === item && styles.chipTextActive]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.topBar}>
          <Text style={styles.brand}>NovaShop</Text>
        </View>

        {/* Search + Map */}
        <View style={styles.searchRow}>
          <TextInput
            placeholder="Search products..."
            value={query}
            onChangeText={setQuery}
            style={styles.search}
            placeholderTextColor={colors.gray}
            returnKeyType="search"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ShopMap')}
            style={styles.mapBtn}
            activeOpacity={0.7}
          >
            <Text style={styles.mapTxt}>Map</Text>
          </TouchableOpacity>
        </View>

        {/* Category Chips */}
        <View style={styles.chips}>
          {CATEGORIES.map(renderCategoryChip)}
        </View>

        {/* Product List */}
        {filteredProducts.length === 0 ? (
          <Text style={styles.emptyText}>No products found.</Text>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContent}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
                onAdd={() => addToCart(item, 1)}
              />
            )}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  brand: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '900',
  },
  link: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  searchRow: {
    flexDirection: 'row',
    padding: 16,
    gap: 10,
  },
  search: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 44,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.grayLight,
    fontSize: 15,
  },
  mapBtn: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  chips: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 10,
    paddingBottom: 6,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.grayLight,
    backgroundColor: colors.white,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    color: colors.grayDark,
    fontWeight: '600',
    fontSize: 14,
  },
  chipTextActive: {
    color: colors.white,
    fontWeight: '700',
  },
  listContent: {
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: colors.grayDark,
    fontWeight: '500',
  },
});
