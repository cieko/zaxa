import products from "@/assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";
import { defaultPizzaImage } from "..";
import { DetailsStyles } from "@/src/styles/details/detailsStyles";

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((i) => i.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={DetailsStyles.container}>
      <Stack.Screen options={{ title: `${product.name}` }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={DetailsStyles.image} />

      <Text>Select size</Text>
      {sizes.map((size, index) => (
        <View key={index} style={DetailsStyles.size}>
          <Text style={DetailsStyles.sizeText}>{size}</Text>
        </View>
      ))}

      <Text style={DetailsStyles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
