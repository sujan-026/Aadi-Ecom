// import { Text, View, StyleSheet, ScrollView } from "react-native";
// import SearchBarFilter from "@/components/SearchBarFilter";
// import spares from "@/assets/spares.json";
// import SpareParts from "@/components/SpareParts";
// import HorBikeCompanyList from "@/components/HorBikeCompanyList";

// export default function Index() {
//   return (
//     <View style={styles.container}>
//     <View style={styles.search}>
//          <ViewSearchBarFilter />
//      </View>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.horizontalScroll}
//       >
//         <HorBikeCompanyList />
//       </ScrollView>
//       <SpareParts spares={spares} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
// search: {
//   alignItems: "center",
//   justifyContent: "center",
// },
//   text: {
//     color: "#fff",
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: "underline",
//     color: "#fff",
//   },
//   horizontalScroll: {
//     marginVertical: 10,
//     paddingHorizontal: 15,
//   },
// });

// import React from "react";
// import { Text, View, StyleSheet, ScrollView } from "react-native";
// import SearchBarFilter from "@/components/SearchBarFilter";
// import spares from "@/assets/spares.json";
// import SpareParts from "@/components/SpareParts";
// import HorBikeCompanyList from "@/components/HorBikeCompanyList";

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.search}>
//         <SearchBarFilter />
//       </View>
//       <ScrollView>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.horizontalScroll}
//         >
//           <HorBikeCompanyList />
//         </ScrollView>
//         <SpareParts spares={spares} />
//         <View style={styles.tabSpacer} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   search: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   horizontalScroll: {
//     marginVertical: 10,
//     paddingHorizontal: 15,
//   },
//   tabSpacer: {
//     height: 80, // Adjust this based on the height of the bottom tab
//   },
// });

// import React from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import SearchBarFilter from "@/components/SearchBarFilter";
// import spares from "@/assets/spares.json";
// import HomeProductDisplay from "@/components/HomeProductDisplay";
// import HorBikeCompanyList from "@/components/HorBikeCompanyList";
// import Header from "@/components/Header";

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.search}>
//         <Header />
//       </View>
//       <ScrollView>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.horizontalScroll}
//         >
//           <HorBikeCompanyList />
//         </ScrollView>
//         <HomeProductDisplay spares={spares} />
//         <View style={styles.tabSpacer} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   search: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   horizontalScroll: {
//     marginVertical: 10,
//     paddingHorizontal: 15,
//   },
//   tabSpacer: {
//     height: 80, // Adjust based on bottom tab height
//   },
// });

// import React from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import SearchBarFilter from "@/components/SearchBarFilter";
// import spares from "@/assets/spares.json";
// import HomeProductDisplay from "@/components/HomeProductDisplay";
// import HorBikeCompanyList from "@/components/HorBikeCompanyList";
// import Header from "@/components/Header";
// import Carousel from "@/components/carousel"; // Import Carousel

// const carouselData = [
//   {
//     image: require("@/assets/slide1.webp"), // Replace with your image path
//     title: "Welcome to Aadi Bikes",
//     description: "Explore the best bike spares and accessories.",
//   },
//   {
//     image: require("@/assets/slide2.webp"), // Replace with your image path
//     title: "Quality Parts Guaranteed",
//     description: "Find genuine parts for your two-wheelers.",
//   },
//   // {
//   //   image: require("@/assets/slide3.jpg"), // Replace with your image path
//   //   title: "Exclusive Discounts",
//   //   description: "Grab the best deals on spare parts today.",
//   // },
// ];

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.search}>
//         <Header />
//       </View>
//       <ScrollView>
//         <Carousel data={carouselData} />
// <ScrollView
//   horizontal
//   showsHorizontalScrollIndicator={false}
//   style={styles.horizontalScroll}
// >
//   <HorBikeCompanyList />
// </ScrollView>
// <HomeProductDisplay spares={spares} />
// <View style={styles.tabSpacer} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   search: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   horizontalScroll: {
//     marginVertical: 10,
//     paddingHorizontal: 15,
//   },
//   tabSpacer: {
//     height: 80, // Adjust based on bottom tab height
//   },
// });

import React from "react";
import { View, StyleSheet, ScrollView,Text } from "react-native";
import Header from "@/components/Header";
import Carousel from "@/components/carousel";
import FeaturedCategories from "@/components/FeaturedCategories";
import PopularProducts from "@/components/PopularProducts";
import BrandsSection from "@/components/BrandsSection";
import HomeProductDisplay from "@/components/HomeProductDisplay";
import spares from "@/assets/spares.json";
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
    title: "Quality Parts Guaranteed",
    description: "Find genuine parts for your two-wheelers.",
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Carousel data={carouselData} />
        <BrandsSection />
        <FeaturedCategories />
        {/* <PopularProducts /> */}
        {/* <HomeProductDisplay spares={spares} /> */}        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
