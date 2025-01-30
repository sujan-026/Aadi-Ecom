// import React from "react";
// import {
//   ScrollView,
//   View,
//   TouchableOpacity,
//   Image,
//   Text,
//   StyleSheet,
// } from "react-native";
// import { useRouter } from "expo-router";

// const data = [
//   { src: require("@/assets/Bike Company/bajaj.png"), name: "Bajaj" },
//   { src: require("@/assets/Bike Company/hero.png"), name: "Hero" },
//   { src: require("@/assets/Bike Company/Honda.png"), name: "Honda" },
//   { src: require("@/assets/Bike Company/Kawasaki.png"), name: "Kawasaki" },
//   { src: require("@/assets/Bike Company/Mahindra.png"), name: "Mahindra" },
//   {
//     src: require("@/assets/Bike Company/RoyalEnfield.png"),
//     name: "Royal Enfield",
//   },
//   { src: require("@/assets/Bike Company/Suzuki.png"), name: "Suzuki" },
//   { src: require("@/assets/Bike Company/TVS.png"), name: "TVS" },
//   { src: require("@/assets/Bike Company/Yamaha.png"), name: "Yamaha" },
// ];

// const HorBikeCompanyList = () => {
//   const router = useRouter();

//   const handlePress = (company) => {
//     router.push(`/(bike)/${company.toLowerCase()}`);
//   };

//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       style={styles.scrollContainer}
//     >
//       {data.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => handlePress(item.name)}
//           style={styles.itemContainer}
//         >
//           <Image source={item.src} style={styles.image} />
//           <Text style={styles.text}>{item.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexDirection: "row",
//     marginVertical: 10,
//   },
//   itemContainer: {
//     alignItems: "center",
//     marginHorizontal: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   text: {
//     marginTop: 5,
//     fontSize: 12,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default HorBikeCompanyList;



import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import db from "@/firebaseConfig";

const HorBikeCompanyList = () => {
  const [bikeCompanies, setBikeCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBikeCompanies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Bikes"));
        const companies = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBikeCompanies(companies);
      } catch (error) {
        console.error("Error fetching bike companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBikeCompanies();
  }, []);

  const handlePress = (company) => {
    router.push(`/(bike)/${company.toLowerCase()}`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading bike companies...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      {bikeCompanies.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handlePress(item.name)}
          style={styles.itemContainer}
        >
          <Image
            source={{ uri: item.src }}
            style={styles.image}
            onError={(e) =>
              console.error(`Image load error: ${e.nativeEvent.error}`)
            }
          />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
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

export default HorBikeCompanyList;
