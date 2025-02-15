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
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useCart } from "@/app/context/CartContext";

const SearchResults = () => {
  // Retrieve the search query from the URL (e.g., ?q=bike)
  const { q } = useLocalSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWishlist, wishlist } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const searchQuery = (q as string) || "";
        // Query to perform a "starts with" search on the title field
        const productsQuery = query(
          collection(db, "Product"),
          where("title", ">=", searchQuery),
          where("title", "<=", searchQuery + "\uf8ff")
        );
        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [q]);

  const handleAddToCart = (product: any) => {
    addToCart(product, "Search Results");
  };

  const handleAddToWishlist = (product: any) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      addToWishlist({ product });
    } else {
      alert("Product already in wishlist!");
    }
  };

  const renderItem = ({ item }: { item: any }) => {
    const isInStock = item.stock === "in stock";

    return (
      <View style={styles.card}>
        {/* Product Image */}
        <Image
          source={{
            uri: item.image
              ? `https://www.aadibikes.com/images/${item.image}`
              : "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
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

        {/* Action Buttons */}
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
      <Text style={styles.header}>Search Results for "{q}"</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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

export default SearchResults;









// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
// } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/firebaseConfig";
// import { useCart } from "@/app/context/CartContext";

// const SearchResults = () => {
//   // Retrieve the search query from the URL (e.g., ?q=bike)
//   const { q } = useLocalSearchParams();
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const { addToCart, addToWishlist, wishlist } = useCart();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const searchQuery = (q as string) || "";
//         // Normalize the search query:
//         // - Trim extra spaces
//         // - Convert to lowercase
//         // - Replace multiple spaces with a single space
//         const normalizedQuery = searchQuery
//           .trim()
//           .toLowerCase()
//           .replace(/\s+/g, " ");
//         console.log(normalizedQuery);
//         // Query to perform a "starts with" search on a normalized field.
//         // Ensure your Firestore Product documents have a 'titleLower' field containing the lowercase title.
//         const productsQuery = query(
//           collection(db, "Product"),
//           where("titleLower", ">=", normalizedQuery),
//           where("titleLower", "<=", normalizedQuery + "\uf8ff")
//         );
//         const querySnapshot = await getDocs(productsQuery);
//         const productsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [q]);

//   const handleAddToCart = (product: any) => {
//     addToCart(product, "Search Results");
//   };

//   const handleAddToWishlist = (product: any) => {
//     if (!wishlist.some((item) => item.id === product.id)) {
//       addToWishlist({ product });
//     } else {
//       alert("Product already in wishlist!");
//     }
//   };

//   const renderItem = ({ item }: { item: any }) => {
//     const isInStock = item.stock === "in stock";

//     return (
//       <View style={styles.card}>
//         {/* Product Image */}
//         <Image
//           source={{
//             uri: item.image
//               ? `https://www.aadibikes.com/images/${item.image}`
//               : "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
//           }}
//           style={styles.image}
//         />

//         {/* Product Title */}
//         <Text style={styles.title}>{item.title}</Text>

//         {/* Product Price */}
//         <View style={styles.priceContainer}>
//           <Text style={styles.sellingPrice}>₹{item.selling_price}</Text>
//           {item.original_price && (
//             <Text style={styles.originalPrice}>₹{item.original_price}</Text>
//           )}
//         </View>

//         {/* Stock Status */}
//         <Text style={[styles.stock, !isInStock && styles.outOfStock]}>
//           {isInStock ? "In Stock" : "Out of Stock"}
//         </Text>

//         {/* Action Buttons */}
//         <View style={styles.actions}>
//           {isInStock ? (
//             <TouchableOpacity
//               style={styles.addToCartButton}
//               onPress={() => handleAddToCart(item)}
//             >
//               <Text style={styles.addToCartText}>Add to Cart</Text>
//             </TouchableOpacity>
//           ) : (
//             <TouchableOpacity
//               style={styles.wishlistButton}
//               onPress={() => handleAddToWishlist(item)}
//             >
//               <Text style={styles.wishlistText}>Add to Wishlist</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text>Loading Products...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Search Results for "{q}"</Text>
//       <FlatList
//         data={products}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     elevation: 2,
//   },
//   image: {
//     width: "100%",
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   priceContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   sellingPrice: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#007bff",
//   },
//   originalPrice: {
//     fontSize: 14,
//     color: "#888",
//     textDecorationLine: "line-through",
//     marginLeft: 10,
//   },
//   stock: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#4CAF50",
//     marginBottom: 10,
//   },
//   outOfStock: {
//     color: "red",
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   addToCartButton: {
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     flex: 1,
//   },
//   addToCartText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   wishlistButton: {
//     backgroundColor: "#f9f9f9",
//     borderWidth: 1,
//     borderColor: "#007bff",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     flex: 1,
//   },
//   wishlistText: {
//     color: "#007bff",
//     fontWeight: "bold",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default SearchResults;
