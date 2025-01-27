// import React from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     FlatList,
//     Image,
//     TouchableOpacity,
// } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import { useCart } from "@/app/context/CartContext";
// import spares from "@/assets/spares.json";

// const ItemPage = () => {
//     const { item } = useLocalSearchParams(); // Get the category from the URL
//     const { addToCart } = useCart(); // Import addToCart from CartContext

//     // Find the data for the selected category
//     const categoryData = spares.find((spare) => spare.name === item)?.data || [];

//     const handleAddToCart = (product) => {
//         addToCart(product, item); // Use the category name as the tabName
//     };

//     const renderItem = ({ item }) => {
//         const originalPrice = parseFloat(item.price) + 500; // Example: Adding ₹500 as the original price
//         const savings = originalPrice - parseFloat(item.price);
//         const isInStock = item.rating !== null; // Assuming `rating` is used as a stock indicator for now

//         return (
//             <View style={styles.card}>
//                 {/* Image */}
//                 <Image source={{ uri: item.src }} style={styles.image} />

//                 {/* Savings */}
//                 {savings > 0 && (
//                     <View style={styles.savingsTag}>
//                         <Text style={styles.savingsText}>Saves ₹{savings.toFixed(0)}</Text>
//                     </View>
//                 )}

//                 {/* Title and Description */}
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.description}>{item.description}</Text>

//                 {/* Price and Stock Info */}
//                 <Text style={styles.price}>₹{item.price}</Text>
//                 <Text style={[styles.stock, !isInStock && styles.outOfStock]}>
//                     {isInStock ? "In Stock" : "Out of Stock"}
//                 </Text>

//                 {/* Add to Cart Button */}
//                 <TouchableOpacity
//                     style={[styles.button, isInStock ? null : styles.disabledButton]}
//                     onPress={() =>
//                         isInStock &&
//                         handleAddToCart({
//                             id: item.id.toString(),
//                             title: item.title,
//                             price: item.price,
//                         })
//                     }
//                     disabled={!isInStock}
//                 >
//                     <Text style={styles.buttonText}>
//                         {isInStock ? "Add to Cart" : "Unavailable"}
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>{item} Items</Text>
//             <FlatList
//                 data={categoryData}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={styles.list}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         backgroundColor: "#fff",
//     },
//     header: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginBottom: 10,
//     },
//     list: {
//         paddingBottom: 20,
//     },
//     card: {
//         backgroundColor: "#f9f9f9",
//         borderRadius: 10,
//         padding: 15,
//         marginBottom: 10,
//         elevation: 2,
//         position: "relative",
//     },
//     image: {
//         width: "100%",
//         height: 150,
//         borderRadius: 10,
//         marginBottom: 10,
//         resizeMode: "contain",
//     },
//     savingsTag: {
//         position: "absolute",
//         top: 10,
//         left: 10,
//         backgroundColor: "#FF5722",
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//     },
//     savingsText: {
//         color: "#fff",
//         fontSize: 12,
//         fontWeight: "bold",
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginBottom: 5,
//     },
//     description: {
//         fontSize: 14,
//         color: "#555",
//         marginBottom: 5,
//     },
//     price: {
//         fontSize: 16,
//         fontWeight: "bold",
//         color: "#333",
//         marginBottom: 10,
//     },
//     stock: {
//         fontSize: 14,
//         fontWeight: "bold",
//         color: "#4CAF50",
//         marginBottom: 10,
//     },
//     outOfStock: {
//         color: "red",
//     },
//     button: {
//         backgroundColor: "#007bff",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//     },
//     disabledButton: {
//         backgroundColor: "#ddd",
//     },
//     buttonText: {
//         color: "#fff",
//         fontWeight: "bold",
//     },
// });

// export default ItemPage;









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
import db from "@/firebaseConfig";
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
        <Image source={{ uri: item.image }} style={styles.image} />

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
