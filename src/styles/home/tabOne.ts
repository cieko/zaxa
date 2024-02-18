import Colors from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const TabOneStyles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      flex: 1,
      maxWidth: "50%",
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