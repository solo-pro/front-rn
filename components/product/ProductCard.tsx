import { Product } from "@/types/product";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = ({ product, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {product.name}
      </Text>
      <Text style={styles.price}>{product.price.toLocaleString()}</Text>
      <View style={styles.row}>
        <Text style={styles.rating}>Rating: {product.rating.toFixed(1)}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  rating: {
    fontSize: 12,
    color: "#888",
  },
  stock: {
    fontSize: 12,
    color: "#888",
  },
});

export default ProductCard;
