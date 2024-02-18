import React, { useState } from "react";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { View, FlatList } from "react-native";
import { Product } from "@/src/interface";

export default function MenuScreen() {
  // const [numColumns, setNumColumns] = useState(2);
  const numColumns = 2;

  const keyExtractor = (_: Product, index: number) => index.toString();

  return (
    <FlatList
      data={products}
      key={numColumns}
      renderItem={({ item }) => {
        return <ProductListItem product={item} />;
      }}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
