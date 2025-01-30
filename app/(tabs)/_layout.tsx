// import { Tabs } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { View, Text, Image, StyleSheet } from "react-native";

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#007bff",
//         headerStyle: {
//           backgroundColor: "#25292e",
//         },
//         headerShadowVisible: false,
//         headerTintColor: "#fff",
//         tabBarStyle: {
//           backgroundColor: "white",
//         },
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           headerTitle: () => (
//             <View style={styles.headerContainer}>
//               <Image
//                 source={require("@/assets/logo.jpg")} // Replace with your logo's path
//                 style={styles.logo}
//               />
//               <Text style={styles.title}>Aadi Spare</Text>
//             </View>
//           ),
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "home-sharp" : "home-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="products"
//         options={{
//           title: "Product",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "pricetags" : "pricetags-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "Cart",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "cart" : "cart-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "person" : "person-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     width: 120,
//     height: 40,
//     marginRight: 8,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });







// import React, { useState, useEffect } from "react";
// import { Tabs } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
// import SplashScreen from "@/components/SplashScreen"; // Import Splash Screen

// export default function TabLayout() {
//   const [isSplashLoading, setIsSplashLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsSplashLoading(false); // Hide splash screen after loading
//     }, 2500); // Adjust loading time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   // Show Splash Screen if still loading
//   if (isSplashLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#007bff",
//         headerStyle: {
//           backgroundColor: "#25292e",
//         },
//         headerShadowVisible: false,
//         headerTintColor: "#fff",
//         tabBarStyle: {
//           backgroundColor: "white",
//         },
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           headerTitle: () => (
//             <View style={styles.headerContainer}>
//               <Image
//                 source={require("@/assets/logo.jpg")} // Replace with your logo's path
//                 style={styles.logo}
//               />
//               <Text style={styles.title}>Aadi Spare</Text>
//             </View>
//           ),
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "home-sharp" : "home-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="products"
//         options={{
//           title: "Product",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "pricetags" : "pricetags-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "Cart",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "cart" : "cart-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "person" : "person-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     width: 120,
//     height: 40,
//     marginRight: 8,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });






import React, { useState } from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image, StyleSheet } from "react-native";
import SplashScreen from "@/components/SplashScreen";

export default function TabLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return isSplashVisible ? (
    <SplashScreen onFinish={() => setIsSplashVisible(false)} /> 
  ) : (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007bff",
        headerStyle: { backgroundColor: "#25292e" },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Product",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "pricetags" : "pricetags-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 40,
    marginRight: 8,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
