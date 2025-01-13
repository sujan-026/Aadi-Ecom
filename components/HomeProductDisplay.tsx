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
      <HStack className="mb-4" justifyContent="space-between">
        <Text className="text-lg font-bold">{category.name}</Text>
        <Pressable>
          <Text className="text-primary-500">View</Text>
        </Pressable>
      </HStack>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
      >
        {category.data.map((item: any, index: number) => (
          <Box
            key={index}
            className="w-[150px] bg-white rounded-lg shadow-md p-4"
          >
            <Image
              source={{ uri: item.src }}
              className="h-[100px] w-full rounded-md"
              alt={`${item.title} image`}
            />
            <Text className="mt-3 text-sm font-medium text-center">
              {item.title}
            </Text>
            <Button
              className="mt-2"
              onPress={() => addToCart(item, category.name)}
            >
              <ButtonText size="sm">Add to cart</ButtonText>
            </Button>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default HomeProductDisplay;
