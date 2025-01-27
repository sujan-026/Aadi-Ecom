// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// const categories = [
//   {
//     name: "Brake & Clutch",
//     icon: require("@/assets/brake_clutch.webp"),
//     tab: "Brake&Clutch",
//   },
//   { name: "Sets", icon: require("@/assets/engine_parts.webp"), tab: "Sets" },
//   {
//     name: "Shock Absorber",
//     icon: require("@/assets/engine_parts.webp"),
//     tab: "Shock Absorber",
//   },
//   {
//     name: "Fuel Pump Motor",
//     icon: require("@/assets/engine_parts.webp"),
//     tab: "Fuel Pump Motor",
//   },
//   { name: "CDI", icon: require("@/assets/engine_parts.webp"), tab: "CDI" },
//   {
//     name: "Speedometer",
//     icon: require("@/assets/engine_parts.webp"),
//     tab: "Speedometer",
//   },
// ];

// const FeaturedCategories = () => {
//   const router = useRouter();

//   const handlePress = (category) => {
//     router.push(`/(spares)/${(category)}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Featured Categories</Text>
//       <View style={styles.grid}>
//         {categories.map((category, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.card}
//             onPress={() => handlePress(category.tab)}
//           >
//             <Image source={category.icon} style={styles.icon} />
//             <Text style={styles.name}>{category.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 15,
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   card: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: "45%",
//     marginVertical: 10,
//     padding: 15,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     elevation: 2,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 10,
//     resizeMode: "contain",
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: "500",
//     textAlign: "center",
//   },
// });

// export default FeaturedCategories;





// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   ActivityIndicator,
// } from "react-native";
// import { collection, getDocs, where } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useRouter } from "expo-router";

// const FeaturedCategories = () => {
//   const [featuredCategories, setFeaturedCategories] = useState([]);
//   const [randomProducts, setRandomProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchFeaturedCategories = async () => {
//       setLoading(true);
//       try {
//         // Fetch all subcategories and randomly select a few for featured categories
//         const subcategorySnapshot = await getDocs(
//           collection(db, "Subcategory")
//         );
//         const subcategories = subcategorySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         // Randomly select 4 subcategories to feature
//         const randomFeaturedCategories = subcategories
//           .sort(() => 0.5 - Math.random())
//           .slice(0, 4);
//         setFeaturedCategories(randomFeaturedCategories);

//         // Fetch random products from selected categories
//         const randomProductsPromises = randomFeaturedCategories.map(
//           (category) =>
//             getDocs(
//               collection(db, "Product"),
//               // Only fetch products matching the category
//               where("__name__", "in", category.spare_part.slice(0, 10))
//             )
//         );

//         const productSnapshots = await Promise.all(randomProductsPromises);
//         const products = productSnapshots.flatMap((snapshot) =>
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }))
//         );

//         setRandomProducts(products);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeaturedCategories();
//   }, []);

//   const handleCategoryPress = (category) => {
//     router.push(`/(spares)/${category}`);
//   };

//   const handleProductPress = (productId) => {
//     router.push(`/product/${productId}`);
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       {/* Featured Categories Section */}
//       <View style={styles.container}>
//         <Text style={styles.title}>Featured Categories</Text>
//         <View style={styles.grid}>
//           {featuredCategories.map((category, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.card}
//               onPress={() => handleCategoryPress(category.spare_part)}
//             >
//               <Image source={{ uri: category.image }} style={styles.icon} />
//               <Text style={styles.name}>{category.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* Random Products Section
//       <View style={styles.container}>
//         <Text style={styles.title}>Explore Products</Text>
//         <View style={styles.grid}>
//           {randomProducts.map((product, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.productCard}
//               onPress={() => handleProductPress(product.id)}
//             >
//               <Image
//                 source={{ uri: product.image }}
//                 style={styles.productImage}
//               />
//               <Text style={styles.productName}>{product.title}</Text>
//               <Text style={styles.productPrice}>₹{product.selling_price}</Text>
//               {product.stock === "in stock" ? (
//                 <Text style={styles.inStock}>In Stock</Text>
//               ) : (
//                 <Text style={styles.outOfStock}>Out of Stock</Text>
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View> */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 15,
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   card: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: "45%",
//     marginVertical: 10,
//     padding: 15,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     elevation: 2,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 10,
//     resizeMode: "contain",
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: "500",
//     textAlign: "center",
//   },
//   productCard: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: "45%",
//     marginVertical: 10,
//     padding: 15,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     elevation: 2,
//   },
//   productImage: {
//     width: 70,
//     height: 70,
//     marginBottom: 10,
//     resizeMode: "contain",
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: "500",
//     textAlign: "center",
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#007bff",
//   },
//   inStock: {
//     fontSize: 12,
//     color: "green",
//     marginTop: 5,
//   },
//   outOfStock: {
//     fontSize: 12,
//     color: "red",
//     marginTop: 5,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//   },
// });

// export default FeaturedCategories;












import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import db from "@/firebaseConfig";
import { useRouter } from "expo-router";

const FeaturedCategories = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchFeaturedCategories = async () => {
      setLoading(true);
      try {
        const subcategorySnapshot = await getDocs(
          collection(db, "Subcategory")
        );
        const subcategories = subcategorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Randomly select 4 featured categories
        const randomFeaturedCategories = subcategories
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setFeaturedCategories(randomFeaturedCategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCategories();
  }, []);

  const handleCategoryPress = (category) => {
    // Pass spare_part array and category name to the [item] page
    router.push({
      pathname: "/(spares)/[item]",
      params: {
        spare_part: JSON.stringify(category.spare_part),
        name: category.name,
      },
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Featured Categories</Text>
        <View style={styles.grid}>
          {featuredCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handleCategoryPress(category)}
            >
              <Image source={{ uri: category.image }} style={styles.icon} />
              <Text style={styles.name}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default FeaturedCategories;
