import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import bikeData from "@/assets/bike.json"; // Bike dataset
import sparesData from "@/assets/spares.json"; // Spares dataset

const ProductPage = () => {
  const { id, company, model } = useLocalSearchParams();

  // Get the bike name and check compatibility in spares.json
  const bikeName = bikeData
    .find((brand) => brand.company.toLowerCase() === company?.toLowerCase())
    ?.bikes.find((bike) => bike.name.toLowerCase() === id?.toLowerCase())?.name;

  const compatibleProducts = sparesData.flatMap((category) =>
    category.data.filter((product) =>
      product.compatibleModal.some(
        (modal) =>
          modal.bikeName.toLowerCase() === bikeName?.toLowerCase() &&
          modal.modelNumber.includes(model)
      )
    )
  );

  return (
    <ScrollView>
      <VStack className="flex-1 p-6">
        <Text className="text-2xl font-bold mb-4">
          Compatible Parts for {model} ({id} - {company})
        </Text>
        {compatibleProducts.length > 0 ? (
          <View className="flex-row flex-wrap justify-center">
            {compatibleProducts.map((product, index) => (
              <View
                key={index}
                className="w-1/2 md:w-1/3 p-1"
                style={{ maxWidth: 360 }}
              >
                <Card className="p-5 rounded-lg">
                  <Image
                    source={{ uri: product.src }}
                    className="mb-2 h-[120px] w-full rounded-md aspect-[263/240]"
                    alt={product.title}
                  />
                  <Text className="text-sm font-normal mb-1 text-typography-700">
                    {product.title}
                  </Text>
                  <Text className="text-md font-semibold mb-2">
                    ₹{product.price}
                  </Text>
                  <Text className="text-xs text-typography-600">
                    {product.description}
                  </Text>
                </Card>
              </View>
            ))}
          </View>
        ) : (
          <Text className="text-center text-md font-semibold text-typography-600 mt-10">
            No compatible parts found for this bike.
          </Text>
        )}
      </VStack>
    </ScrollView>
  );
};

export default ProductPage;
