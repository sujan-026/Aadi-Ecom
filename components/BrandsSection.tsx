// import React from "react";
// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

// const brands = [
//   { name: "Bajaj", logo: require("@/assets/Bike Company/bajaj.png") },
//   { name: "Hero", logo: require("@/assets/Bike Company/hero.png") },
//   { name: "Honda", logo: require("@/assets/Bike Company/Honda.png") },
//   { name: "Kawasaki", logo: require("@/assets/Bike Company/Kawasaki.png") },
//   { name: "Mahindra", logo: require("@/assets/Bike Company/Mahindra.png") },
//   {
//     name: "Royal Enfield",
//     logo: require("@/assets/Bike Company/RoyalEnfield.png"),
//   },
//   { name: "TVS", logo: require("@/assets/Bike Company/TVS.png") },
//   { name: "Yamaha", logo: require("@/assets/Bike Company/Yamaha.png") },
//   { name: "Suzuki", logo: require("@/assets/Bike Company/Suzuki.png") },
// ];

// const BrandsSection = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Brands We Support</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {brands.map((brand, index) => (
//           <View key={index} style={styles.card}>
//             <Image source={brand.logo} style={styles.logo} />
//             <Text style={styles.name}>{brand.name}</Text>
//           </View>
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
//     resizeMode: "contain",
//   },
//   name: {
//     fontSize: 14,
//     textAlign: "center",
//   },
// });

// export default BrandsSection;








import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const brands = [
  { name: "Bajaj", logo: require("@/assets/Bike Company/bajaj.png") },
  { name: "Hero", logo: require("@/assets/Bike Company/hero.png") },
  { name: "Honda", logo: require("@/assets/Bike Company/Honda.png") },
  { name: "Kawasaki", logo: require("@/assets/Bike Company/Kawasaki.png") },
  { name: "Mahindra", logo: require("@/assets/Bike Company/Mahindra.png") },
  {
    name: "Royal Enfield",
    logo: require("@/assets/Bike Company/RoyalEnfield.png"),
  },
  { name: "TVS", logo: require("@/assets/Bike Company/TVS.png") },
  { name: "Yamaha", logo: require("@/assets/Bike Company/Yamaha.png") },
  { name: "Suzuki", logo: require("@/assets/Bike Company/Suzuki.png") },
];

const BrandsSection = () => {
  const router = useRouter();

interface Brand {
    name: string;
    logo: any; // You can replace 'any' with the specific type if known
}

const brands: Brand[] = [
    { name: "Bajaj", logo: require("@/assets/Bike Company/bajaj.png") },
    { name: "Hero", logo: require("@/assets/Bike Company/hero.png") },
    { name: "Honda", logo: require("@/assets/Bike Company/Honda.png") },
    { name: "Kawasaki", logo: require("@/assets/Bike Company/Kawasaki.png") },
    { name: "Mahindra", logo: require("@/assets/Bike Company/Mahindra.png") },
    {
        name: "Royal Enfield",
        logo: require("@/assets/Bike Company/RoyalEnfield.png"),
    },
    { name: "TVS", logo: require("@/assets/Bike Company/TVS.png") },
    { name: "Yamaha", logo: require("@/assets/Bike Company/Yamaha.png") },
    { name: "Suzuki", logo: require("@/assets/Bike Company/Suzuki.png") },
];

const handlePress = (brand: string) => {
    router.push(`/(bike)/${brand.toLowerCase()}`); // Navigate to the specific bike company page
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands We Support</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handlePress(brand.name)}
          >
            <Image source={brand.logo} style={styles.logo} />
            <Text style={styles.name}>{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  card: {
    alignItems: "center",
    marginRight: 15,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BrandsSection;
