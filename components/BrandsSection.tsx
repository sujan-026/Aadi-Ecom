// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   ActivityIndicator,
//   Image,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { collection, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";

// const BASE_IMAGE_URL = "https://www.aadibikes.com/images/";

// const BrandsSection = () => {
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loadingTime, setLoadingTime] = useState(0); // Time logger
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBrands = async () => {
//       const startTime = Date.now();
//       try {
//         setLoading(true);

//         // Fetch brands from Firestore
//         const brandSnapshot = await getDocs(collection(db, "Bikes"));
//         const brandData = brandSnapshot.docs
//           .map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }))
//           .filter((brand) => brand.src); // Ensure 'src' exists

//         setBrands(brandData);
//         const endTime = Date.now();
//         setLoadingTime((endTime - startTime) / 1000);
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBrands();
//   }, []);

//   const handlePress = (brand) => {
//     router.push(`/(bike)/${brand.toLowerCase()}`);
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text style={styles.loadingText}>Loading brands...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Brands We Support</Text>
//       <Text style={styles.loadingTime}>
//         Loaded in {loadingTime.toFixed(2)} seconds
//       </Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {brands.map((brand) => (
//           <TouchableOpacity
//             key={brand.id}
//             style={styles.card}
//             onPress={() => handlePress(brand.name)}
//           >
//             <Image
//               style={styles.logo}
//               source={{
//                 uri: brand.src
//                   ? `${BASE_IMAGE_URL}${brand.src}`
//                   : "https://via.placeholder.com/100",
//               }}
//               resizeMode="contain"
//             />
//             <Text style={styles.name}>{brand.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
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
//   loadingTime: {
//     fontSize: 14,
//     color: "gray",
//     marginBottom: 10,
//   },
//   card: {
//     alignItems: "center",
//     marginRight: 15,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 5,
//     borderRadius: 10,
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: "bold",
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

// export default BrandsSection;










// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { collection, getDocs, query, limit } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useRouter } from "expo-router";

// const BASE_IMAGE_URL = "https://www.aadibikes.com/images/";

// const BrandsSection = () => {
//   const [brands, setBrands] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const q = query(collection(db, "Bikes"), limit(8)); // Fetch only 8 brands
//         const brandSnapshot = await getDocs(q);
//         const brandData = brandSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setBrands(brandData);
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       }
//     };

//     fetchBrands();
//   }, []);

//   const handlePress = (brand) => {
//     router.push(`/(bike)/${brand.toLowerCase()}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Brands We Support</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {brands.map((brand) => (
//           <TouchableOpacity
//             key={brand.id}
//             style={styles.card}
//             onPress={() => handlePress(brand.name)}
//           >
//             <Image
//               style={styles.logo}
//               source={{
//                 uri: `${BASE_IMAGE_URL}${brand.src}`,
//               }}
//               resizeMode="contain"
//             />
//             <Text style={styles.name}>{brand.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
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
//   card: {
//     alignItems: "center",
//     marginRight: 15,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 5,
//     borderRadius: 10,
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default BrandsSection;










import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { collection, getDocs, query, limit } from "firebase/firestore";
import {db} from "@/firebaseConfig";
import { useRouter } from "expo-router";

const BASE_IMAGE_URL = "https://www.aadibikes.com/images/";

const BrandsSection = () => {
  const [brands, setBrands] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const q = query(collection(db, "Bikes"), limit(8));
        const brandSnapshot = await getDocs(q);
        const brandData = brandSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBrands(brandData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const handlePress = (brand) => {
    router.push(`/(bike)/${brand.name.toLowerCase()}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands We Support</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            style={styles.card}
            onPress={() => handlePress(brand)}
          >
            <Image
              style={styles.logo}
              source={{
                uri: brand.src
                  ? `${BASE_IMAGE_URL}${brand.src}`
                  : "https://via.placeholder.com/100",
              }}
              resizeMode="contain"
            />
            <Text style={styles.name}>{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Preloading method for BrandsSection
BrandsSection.preload = async () => {
  const brandSnapshot = await getDocs(collection(db, "Bikes"));
  return brandSnapshot.docs.map((doc) => doc.data());
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
    alignItems: "center",
    marginRight: 15,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BrandsSection;
