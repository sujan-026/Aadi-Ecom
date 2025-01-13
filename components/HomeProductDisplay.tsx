import React from "react";
import { ScrollView } from "react-native";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { Button, ButtonText } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";

const HomeProductDisplay = ({ spares }: any) => {
  return (
    <ScrollView>
      {spares.map((category: any, index: number) => (
        <SparePartsCategory key={index} category={category} index={index} />
      ))}
    </ScrollView>
  );
};

const SparePartsCategory = ({ category }: any) => {
  const { addToCart } = useCart();

  return (
    <Box className="mb-10 px-4">
      <HStack justify="between" className="mb-4">
        <Text className="text-lg font-bold">{category.name}</Text>
      </HStack>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
      >
        {category.data.map((item: any, index: number) => (
          <Box
            key={index}
            className="w-[150px] h-[220px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <Image
              source={{ uri: item.src }}
              className="h-[100px] w-full rounded-md mb-2"
              alt={`${item.title} image`}
              resizeMode="cover"
            />
            <Text
              className="text-sm font-medium text-center mb-2"
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <Button
              className="bg-black py-1"
              onPress={() => addToCart(item, category.name)}
            >
              <ButtonText size="sm" className="text-white">
                Add to cart
              </ButtonText>
            </Button>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};



export default HomeProductDisplay;
