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
// import { collection, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useRouter } from "expo-router";

// const FeaturedCategories = () => {
//   const [featuredCategories, setFeaturedCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchFeaturedCategories = async () => {
//       setLoading(true);
//       try {
//         const subcategorySnapshot = await getDocs(
//           collection(db, "Subcategory")
//         );
//         const subcategories = subcategorySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         // Randomly select 4 featured categories
//         const randomFeaturedCategories = subcategories
//           .sort(() => 0.5 - Math.random())
//           .slice(0, 4);
//         setFeaturedCategories(randomFeaturedCategories);
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeaturedCategories();
//   }, []);

//   const handleCategoryPress = (category) => {
//     // Pass spare_part array and category name to the [item] page
//     router.push({
//       pathname: "/(spares)/[item]",
//       params: {
//         spare_part: JSON.stringify(category.spare_part),
//         name: category.name,
//       },
//     });
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
//       <View style={styles.container}>
//         <Text style={styles.title}>Featured Categories</Text>
//         <View style={styles.grid}>
//           {featuredCategories.map((category, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.card}
//               onPress={() => handleCategoryPress(category)}
//             >
//               <Image source={{ uri: category.image }} style={styles.icon} />
//               <Text style={styles.name}>{category.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
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




// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { collection, getDocs, query, limit } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useRouter } from "expo-router";

// const FeaturedCategories = () => {
//   const [featuredCategories, setFeaturedCategories] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchFeaturedCategories = async () => {
//       try {
//         const q = query(collection(db, "Subcategory"), limit(4)); // Fetch 4 categories
//         const subcategorySnapshot = await getDocs(q);
//         const subcategories = subcategorySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setFeaturedCategories(subcategories);
//       } catch (error) {
//         console.error("Error fetching subcategories:", error);
//       }
//     };

//     fetchFeaturedCategories();
//   }, []);

//   const handleCategoryPress = (category) => {
//     router.push({
//       pathname: "/(spares)/[item]",
//       params: {
//         spare_part: JSON.stringify(category.spare_part),
//         name: category.name,
//       },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Featured Categories</Text>
//       <View style={styles.grid}>
//         {featuredCategories.map((category, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.card}
//             onPress={() => handleCategoryPress(category)}
//           >
//             <Image source={{ uri: category.image }} style={styles.icon} />
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







import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { collection, getDocs, query, limit } from "firebase/firestore";
import db from "@/firebaseConfig";
import { useRouter } from "expo-router";

const FeaturedCategories = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFeaturedCategories = async () => {
      try {
        const q = query(collection(db, "Subcategory"), limit(4));
        const subcategorySnapshot = await getDocs(q);
        const subcategories = subcategorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeaturedCategories(subcategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchFeaturedCategories();
  }, []);

  const handleCategoryPress = (category) => {
    router.push({
      pathname: "/(spares)/[item]",
      params: {
        spare_part: JSON.stringify(category.spare_part),
        name: category.name,
      },
    });
  };

  return (
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
  );
};

// Preloading method for FeaturedCategories
FeaturedCategories.preload = async () => {
  const subcategorySnapshot = await getDocs(collection(db, "Subcategory"));
  return subcategorySnapshot.docs.map((doc) => doc.data());
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
});

export default FeaturedCategories;
