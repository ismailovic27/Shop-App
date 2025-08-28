import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

export default function VendorCard({ vendor, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{vendor.name}</Text>
      <Text style={styles.location}>{vendor.location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.text,
  },
  location: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.gray,
    marginTop: 4,
  },
});
