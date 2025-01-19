import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const products = [
  {
    name: "Disc Brake Caliper",
    price: "$120",
    image: require("@/assets/brake_clutch.webp"),
  },
  {
    name: "Engine Oil Filter",
    price: "$50",
    image: require("@/assets/engine_parts.webp"),
  },
//   {
//     name: "Handle Grips",
//     price: "$30",
//     image: require("@/assets/product3.png"),
//   },
];

const PopularProducts = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    width: 150,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default PopularProducts;










