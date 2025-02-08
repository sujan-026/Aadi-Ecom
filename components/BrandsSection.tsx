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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands We Support</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            style={styles.card}
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
