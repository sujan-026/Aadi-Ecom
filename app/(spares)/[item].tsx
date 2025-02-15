import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "@/firebaseConfig";
import { useCart } from "@/app/context/CartContext";

// Helper function to chunk array for Firestore's "in" query
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ItemPage = () => {
  const { spare_part, name } = useLocalSearchParams(); // Get spare_part array and category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWishlist, wishlist } = useCart(); // Use CartContext

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const spareParts = JSON.parse(spare_part); // Parse the spare_part array
        const chunks = chunkArray(spareParts, 30); // Chunk the array for Firestore query

        const productPromises = chunks.map((chunk) =>
          getDocs(
            query(collection(db, "Product"), where("__name__", "in", chunk))
          )
        );

        const productSnapshots = await Promise.all(productPromises);
        const productsData = productSnapshots.flatMap((snapshot) =>
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [spare_part]);

  const handleAddToCart = (product) => {
    addToCart(
      product,
      name
    );
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      addToWishlist({
        product,
      });
    } else {
      alert("Product already in wishlist!");
    }
  };

  const renderItem = ({ item }) => {
    const isInStock = item.stock === "in stock";

    return (
      <View style={styles.card}>
        {/* Product Image */}
        <Image
          source={{
            uri:
              item.image !== "url"
                ? `https://www.aadibikes.com/images/${item.image}`
                : `https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png`,
          }}
          style={styles.image}
        />

        {/* Product Title */}
        <Text style={styles.title}>{item.title}</Text>

        {/* Product Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.sellingPrice}>₹{item.selling_price}</Text>
          {item.original_price && (
            <Text style={styles.originalPrice}>₹{item.original_price}</Text>
          )}
        </View>

        {/* Stock Status */}
        <Text style={[styles.stock, !isInStock && styles.outOfStock]}>
          {isInStock ? "In Stock" : "Out of Stock"}
        </Text>

        {/* Action Button */}
        <View style={styles.actions}>
          {isInStock ? (
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.wishlistButton}
              onPress={() => handleAddToWishlist(item)}
            >
              <Text style={styles.wishlistText}>Add to Wishlist</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading Products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name} Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sellingPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
  originalPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  stock: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
  },
  outOfStock: {
    color: "red",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
  },
  wishlistButton: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  wishlistText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemPage;
