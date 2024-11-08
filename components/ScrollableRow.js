import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ProductCard } from "./ProductCard";

export const ScrollableRow = ({ title, products, onProductPress }) => (
  <View style={styles.categorySection}>
    <Text style={styles.categoryTitle}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={() => onProductPress(product)}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  categorySection: {
    padding: 10,
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});
