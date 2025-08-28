import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

function DashboardTile({ label, onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={styles.tile} 
      activeOpacity={0.7} // gives a nice pressed effect
    >
      <Text style={styles.tileTxt}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function VendorHome({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Vendor Dashboard</Text>
        
        <DashboardTile 
          label="Publish New Product" 
          onPress={() => navigation.navigate('AddProduct')} 
        />

        {/* Add more dashboard tiles as needed */}
        {/* 
        <DashboardTile label="View Orders" onPress={() => navigation.navigate('Orders')} />
        <DashboardTile label="Manage Products" onPress={() => navigation.navigate('MyProducts')} /> 
        */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // extra padding for Android status bar
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 24,
    color: colors.text,
  },
  tile: {
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.grayLight,
    marginBottom: 16,
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 4, 
    elevation: 2, // Android shadow
  },
  tileTxt: {
    fontWeight: '900',
    color: colors.primary,
    fontSize: 16,
  },
});
