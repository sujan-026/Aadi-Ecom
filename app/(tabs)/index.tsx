// import React, { useState, useEffect } from "react";
// import {StyleSheet, ScrollView } from "react-native";
// import Header from "@/components/Header";
// import Carousel from "@/components/carousel";
// import FeaturedCategories from "@/components/FeaturedCategories";
// import BrandsSection from "@/components/BrandsSection";
// import SplashScreen from "@/components/SplashScreen"; // Import SplashScreen component

// const carouselData = [
//   {
//     image: require("@/assets/slide1.png"),
//     title: "Welcome to Aadi Bikes",
//     description: "Explore the best bike spares and accessories.",
//   },
//   {
//     image: require("@/assets/slide2.png"),
//     title: "Quality Parts Guaranteed",
//     description: "Find genuine parts for your two-wheelers.",
//   },
// ];

// export default function Index() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     // Simulate loading delay for data-intensive components
//     const loadComponents = async () => {
//       try {
//         // Preloading data for components in parallel
//         await Promise.all([
//           BrandsSection.preload ? BrandsSection.preload() : Promise.resolve(),
//           FeaturedCategories.preload
//             ? FeaturedCategories.preload()
//             : Promise.resolve(),
//         ]);
//       } catch (error) {
//         console.error("Error loading components:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadComponents();
//   }, []);

//   if (loading) {
//     // Show splash screen during data loading
//     return <SplashScreen onFinish={() => setLoading(true)} />;
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Header />
//       <Carousel data={carouselData} />
//       {/* <Text style={styles.loadingTime}>
//         Home loaded in {loadTime.toFixed(2)} seconds
//       </Text> */}
//       <BrandsSection />
//       <FeaturedCategories />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   loadingTime: {
//     marginVertical: 10,
//     fontSize: 14,
//     color: "gray",
//     textAlign: "center",
//   },
// });



import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Header from "@/components/Header";
import Carousel from "@/components/carousel";
import FeaturedCategories from "@/components/FeaturedCategories";
import BrandsSection from "@/components/BrandsSection";
import SplashScreen from "@/components/SplashScreen"; // Import SplashScreen component
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";

const carouselData = [
  {
    image: require("@/assets/slide1.png"),
    title: "Welcome to Aadi Bikes",
    description: "Explore the best bike spares and accessories.",
  },
  {
    image: require("@/assets/slide2.png"),
    title: "Quality Parts Guaranteed",
    description: "Find genuine parts for your two-wheelers.",
  },
];

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    // Simulate loading delay and preload component data in parallel
    const loadComponents = async () => {
      try {
        await Promise.all([
          BrandsSection.preload ? BrandsSection.preload() : Promise.resolve(),
          FeaturedCategories.preload
            ? FeaturedCategories.preload()
            : Promise.resolve(),
        ]);
      } catch (error) {
        console.error("Error loading components:", error);
      } finally {
        setLoading(false);
      }
    };

    loadComponents();
  }, []);

  // Handler to search for products from Firestore
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    setSearchLoading(true);
    try {
      // Firestore "starts with" query trick using >= and <= with '\uf8ff'
      const q = query(
        collection(db, "Product"),
        where("title", ">=", searchQuery),
        where("title", "<=", searchQuery + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setSearchLoading(false);
    }
  };

  if (loading) {
    // Show splash screen while preloading data
    return <SplashScreen onFinish={() => setLoading(true)} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Carousel data={carouselData} />

      <BrandsSection />
      <FeaturedCategories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultsContainer: {
    padding: 10,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
  },
});
