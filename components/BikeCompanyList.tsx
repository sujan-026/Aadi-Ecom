import React from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

const data = [
  { src: require("@/assets/Bike Company/bajaj.png"), name: "Bajaj" },
  { src: require("@/assets/Bike Company/hero.png"), name: "Hero" },
  { src: require("@/assets/Bike Company/Honda.png"), name: "Honda" },
  { src: require("@/assets/Bike Company/Kawasaki.png"), name: "Kawasaki" },
  { src: require("@/assets/Bike Company/Mahindra.png"), name: "Mahindra" },
  {
    src: require("@/assets/Bike Company/RoyalEnfield.png"),
    name: "Royal Enfield",
  },
  { src: require("@/assets/Bike Company/Suzuki.png"), name: "Suzuki" },
  { src: require("@/assets/Bike Company/TVS.png"), name: "TVS" },
  { src: require("@/assets/Bike Company/Yamaha.png"), name: "Yamaha" },
];

const BikeCompanyList = () => {
  const router = useRouter();

  const handlePress = (company: string) => {
    router.push(`/(bike)/${company.toLowerCase()}`);
  };

  return (
    <ScrollView className="w-full px-5 py-5">
      <VStack className="flex-wrap flex-row justify-between">
        {data.map((image, index) => (
          <Pressable
            key={index}
            onPress={() => handlePress(image.name)}
            className="w-[48%] md:w-[30%] lg:w-[23%] mb-4"
          >
            <Box>
              <Image
                source={image.src}
                alt={image.name}
                className="w-full h-40 rounded-md"
                resizeMode="cover"
              />
              <Text className="text-center mt-2 font-semibold">
                {image.name}
              </Text>
            </Box>
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default BikeCompanyList;
