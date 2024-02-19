import { TabOneStyles } from "@/src/styles/home/tabOne";
import { Text, Image, Pressable } from "react-native";
import { Product } from "../interface";

import { Link } from "expo-router";
import { defaultPizzaImage } from "../app/(tabs)";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem = (props: ProductListItemProps) => {
  return (
    <Link href={`/menu/${props.product.id}`} asChild>
      <Pressable style={TabOneStyles.container}>
        <Image
          source={{ uri: props.product.image || defaultPizzaImage }}
          style={TabOneStyles.image}
          resizeMode="contain"
        />
        <Text style={TabOneStyles.title}>{props.product.name}</Text>
        <Text style={TabOneStyles.price}>${props.product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
