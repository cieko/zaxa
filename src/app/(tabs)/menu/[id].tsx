import products from '@/assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const ProductDetailScreen = () => {
  const {id: pageId} = useLocalSearchParams();
  const productName = products.find(i => i.id === Number(pageId))?.name;

  return (
    <View>
        <Stack.Screen options={{ title: `${productName}` }} />
        <Text style={{fontSize: 20}}>ProductDetailScreen for id: {pageId}</Text>
    </View>
  )
}

export default ProductDetailScreen
