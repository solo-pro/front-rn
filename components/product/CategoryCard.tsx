import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Category } from "@/types/product";

type Props = {
  category: Category;
  onPress: () => void;
};

const CategoryCard = ({ category, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <Text style={styles.name}>{category.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    minHeight: 45,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoryCard;
