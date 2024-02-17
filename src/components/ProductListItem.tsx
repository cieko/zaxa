import { TabOneStyles } from "@/src/styles/home/tabOne";
import { View, Text, Image, FlatList } from "react-native";

interface ProductListItemProps {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

const ProductListItem = (props: ProductListItemProps) => {
  return (
    <View style={TabOneStyles.container}>
      <Image source={{ uri: props.product.image }} style={TabOneStyles.image} />
      <Text style={TabOneStyles.title}>{props.product.name}</Text>
      <Text style={TabOneStyles.price}>${props.product.price}</Text>
    </View>
  );
};

export default ProductListItem;
