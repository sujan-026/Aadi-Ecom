import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const BASE_IMAGE_URL = "https://www.aadibikes.com/images/";

const BikeCompanyList = () => {
  const router = useRouter();
  const [brands, setBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const handlePress = (company: string) => {
    router.push(`/(bike)/${company.toLowerCase()}`);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text className="mt-2">Loading Bikes...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="w-full px-5 py-5">
      <VStack className="flex-wrap flex-row justify-between">
        {brands.map((brand) => (
          <Pressable
            key={brand.id}
            onPress={() => handlePress(brand.name)}
            className="w-[48%] md:w-[30%] lg:w-[23%] mb-4"
          >
            <Box>
              <Image
                source={{
                  uri: brand.src
                    ? `${BASE_IMAGE_URL}${brand.src}`
                    : "https://via.placeholder.com/150",
                }}
                alt={brand.name}
                className="w-full h-40 rounded-md"
                resizeMode="cover"
              />
              <Text className="text-center mt-2 font-semibold">
                {brand.name}
              </Text>
            </Box>
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default BikeCompanyList;
