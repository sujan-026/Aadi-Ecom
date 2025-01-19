// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// const categories = [
//   { name: "Brake & Clutch", icon: require("@/assets/brake_clutch.webp") },
//   { name: "Engine Parts", icon: require("@/assets/engine_parts.webp") },
//   { name: "Body Parts", icon: require("@/assets/engine_parts.webp") },
//   //   { name: "Accessories", icon: require("@/assets/accessories.webp") },
// ];

// const FeaturedCategories = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Featured Categories</Text>
//       <View style={styles.grid}>
//         {categories.map((category, index) => (
//           <TouchableOpacity key={index} style={styles.card}>
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






import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const categories = [
  {
    name: "Brake & Clutch",
    icon: require("@/assets/brake_clutch.webp"),
    tab: "Brake&Clutch",
  },
  { name: "Sets", icon: require("@/assets/engine_parts.webp"), tab: "Sets" },
  {
    name: "Shock Absorber",
    icon: require("@/assets/engine_parts.webp"),
    tab: "Shock Absorber",
  },
  {
    name: "Fuel Pump Motor",
    icon: require("@/assets/engine_parts.webp"),
    tab: "Fuel Pump Motor",
  },
  { name: "CDI", icon: require("@/assets/engine_parts.webp"), tab: "CDI" },
  {
    name: "Speedometer",
    icon: require("@/assets/engine_parts.webp"),
    tab: "Speedometer",
  },
];

const FeaturedCategories = () => {
  const router = useRouter();

  const handlePress = (category) => {
    router.push(`/(spares)/${(category)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Categories</Text>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handlePress(category.tab)}
          >
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.name}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
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
});

export default FeaturedCategories;
