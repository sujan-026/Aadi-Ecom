// import React from "react";
// import { View, StyleSheet, ScrollView,Text } from "react-native";
// import Header from "@/components/Header";
// import Carousel from "@/components/carousel";
// import FeaturedCategories from "@/components/FeaturedCategories";
// import PopularProducts from "@/components/PopularProducts";
// import BrandsSection from "@/components/BrandsSection";
// import HomeProductDisplay from "@/components/HomeProductDisplay";
// import spares from "@/assets/spares.json";
// import { Link } from "expo-router";

// const carouselData = [
//   {
//     image: require("@/assets/slide1.webp"),
//     title: "Welcome to Aadi Bikes",
//     description: "Explore the best bike spares and accessories.",
//   },
//   {
//     image: require("@/assets/slide2.webp"),
//     title: "Quality Parts Guaranteed",
//     description: "Find genuine parts for your two-wheelers.",
//   },
//   {
//     image: require("@/assets/slide3.webp"),
//     title: "Quality Parts Guaranteed",
//     description: "Find genuine parts for your two-wheelers.",
//   },
// ];

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <Carousel data={carouselData} />
//         <BrandsSection />
//         <FeaturedCategories />
//         {/* <PopularProducts /> */}
//         {/* <HomeProductDisplay spares={spares} /> */}        
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
// });









// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import Header from "@/components/Header";
// import Carousel from "@/components/carousel";
// import FeaturedCategories from "@/components/FeaturedCategories";
// import BrandsSection from "@/components/BrandsSection";

// const carouselData = [
//   {
//     image: require("@/assets/slide1.webp"),
//     title: "Welcome to Aadi Bikes",
//     description: "Explore the best bike spares and accessories.",
//   },
//   {
//     image: require("@/assets/slide2.webp"),
//     title: "Quality Parts Guaranteed",
//     description: "Find genuine parts for your two-wheelers.",
//   },
//   {
//     image: require("@/assets/slide3.webp"),
//     title: "Wide Range of Options",
//     description: "Find genuine parts for your two-wheelers.",
//   },
// ];

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <Carousel data={carouselData} />
//         <BrandsSection />
//         <FeaturedCategories />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
// });






// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
// import Header from "@/components/Header";
// import Carousel from "@/components/carousel";
// import FeaturedCategories from "@/components/FeaturedCategories";
// import BrandsSection from "@/components/BrandsSection";

// const carouselData = [
//   {
//     image: require("@/assets/slide1.webp"),
//     title: "Welcome to Aadi Bikes",
//     description: "Explore the best bike spares and accessories.",
//   },
//   {
//     image: require("@/assets/slide2.webp"),
//     title: "Quality Parts Guaranteed",
//     description: "Find genuine parts for your two-wheelers.",
//   },
//   {
//     image: require("@/assets/slide3.webp"),
//     title: "Wide Range of Options",
//     description: "Find genuine parts for your two-wheelers.",
//   },
// ];

// export default function Index() {
//   const [loading, setLoading] = useState(true);
//   const [loadTime, setLoadTime] = useState(0);

//   useEffect(() => {
//     const startTime = Date.now();

//     // Simulate loading delay for both components
//     const loadComponents = async () => {
//       try {
//         // Fetching data for both components in parallel
//         await Promise.all([
//           BrandsSection.preload(),
//           FeaturedCategories.preload(),
//         ]);
//       } catch (error) {
//         console.error("Error loading components:", error);
//       } finally {
//         const endTime = Date.now();
//         console.log((endTime - startTime) / 1000);
//         setLoadTime((endTime - startTime) / 1000);
//         setLoading(false);
//       }
//     };

//     loadComponents();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text style={styles.loadingText}>Loading Home Page...</Text>
//         <Text style={styles.loadingTime}>
//           Time elapsed: {loadTime.toFixed(2)} seconds
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Header />
//       <Carousel data={carouselData} />
//       <Text style={styles.loadingTime}>
//         Time elapsed: {loadTime.toFixed(2)} seconds
//       </Text>
//       <BrandsSection />
//       <FeaturedCategories />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   loadingTime: {
//     marginTop: 5,
//     fontSize: 14,
//     color: "gray",
//   },
// });










import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "@/components/Header";
import Carousel from "@/components/carousel";
import FeaturedCategories from "@/components/FeaturedCategories";
import BrandsSection from "@/components/BrandsSection";
import SplashScreen from "@/components/SplashScreen"; // Import SplashScreen component
import { Link } from "expo-router";

const carouselData = [
  {
    image: require("@/assets/slide1.webp"),
    title: "Welcome to Aadi Bikes",
    description: "Explore the best bike spares and accessories.",
  },
  {
    image: require("@/assets/slide2.webp"),
    title: "Quality Parts Guaranteed",
    description: "Find genuine parts for your two-wheelers.",
  },
  {
    image: require("@/assets/slide3.webp"),
    title: "Wide Range of Options",
    description: "Find genuine parts for your two-wheelers.",
  },
];

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    // Simulate loading delay for data-intensive components
    const loadComponents = async () => {
      try {
        // Preloading data for components in parallel
        await Promise.all([
          BrandsSection.preload ? BrandsSection.preload() : Promise.resolve(),
          FeaturedCategories.preload
            ? FeaturedCategories.preload()
            : Promise.resolve(),
        ]);
      } catch (error) {
        console.error("Error loading components:", error);
      } finally {
        const endTime = Date.now();
        setLoadTime((endTime - startTime) / 1000); // Calculate total load time
        console.log("Loaded home in:", (endTime - startTime) / 1000);
        setLoading(false);
      }
    };

    loadComponents();
  }, []);

  if (loading) {
    // Show splash screen during data loading
    return <SplashScreen onFinish={() => setLoading(true)} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Carousel data={carouselData} />
      {/* <Text style={styles.loadingTime}>
        Home loaded in {loadTime.toFixed(2)} seconds
      </Text> */}
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
  loadingTime: {
    marginVertical: 10,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
