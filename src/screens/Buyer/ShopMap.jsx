import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { colors } from '../../constants/colors';
import { CONFIG } from '../../constants/config';

const DEMO_SHOPS = [
  { id: 1, name: 'EcoWear Store', lat: 36.754, lng: 3.05 },
  { id: 2, name: 'Green Shoes', lat: 36.748, lng: 3.03 }
];

export default function ShopMap() {
  const [region] = useState(CONFIG.MAP_INITIAL_REGION);

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={region}>
        {DEMO_SHOPS.map((s) => (
          <Marker key={s.id} coordinate={{ latitude: s.lat, longitude: s.lng }}>
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.shopName}>{s.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  callout: { 
    width: 160, 
    backgroundColor: colors.white, 
    padding: 8, 
    borderRadius: 6 
  },
  shopName: { 
    fontWeight: '700', 
    color: colors.text 
  }
});
