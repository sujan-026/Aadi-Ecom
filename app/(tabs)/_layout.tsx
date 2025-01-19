// import { Tabs } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#ffd33d",
//         headerStyle: {
//           backgroundColor: "#25292e",
//         },
//         headerShadowVisible: false,
//         headerTintColor: "#fff",
//         tabBarStyle: {
//           backgroundColor: "#25292e",
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Aadi Spare",
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

import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007bff",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require("@/assets/logo.jpg")} // Replace with your logo's path
                style={styles.logo}
              />
              <Text style={styles.title}>Aadi Spare</Text>
            </View>
          ),
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
