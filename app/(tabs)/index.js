import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { ScrollableRow } from "../../components/ScrollableRow";
import { sampleProducts } from "../../data/sampleProducts";

export default function HomePage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const handleProductPress = (product) => {
    if (!isSignedIn) {
      router.push("/login");
    } else {
      // Add to cart logic here
      console.log("Adding to cart:", product);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {sampleProducts.map((category) => (
        <ScrollableRow
          key={category.id}
          title={category.title}
          products={category.products}
          onProductPress={handleProductPress}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
