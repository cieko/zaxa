import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import { StyleSheet, View, Text, Image } from "react-native";

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.dark.tint,
    fontWeight: "bold",
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});
