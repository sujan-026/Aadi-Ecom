import React from "react";
import { ScrollView, Linking, Alert } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { useRouter } from "expo-router";

const CustomerServiceModal = () => {
  const router = useRouter();

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Unable to open the link.");
    }
  };

  const handleModalNavigation = (type: string) => {
    router.push({
      pathname: "/modal",
      params: { modalType: type },
    });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <VStack space="lg">
        <Heading size="lg">Customer Service</Heading>
        <Text>
          Find quick help with your orders, refunds, returns, and more.
        </Text>

        {/* Your Orders Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Your Orders</Heading>
          <Text>Track, return, or view an order.</Text>
          <Button
            variant="outline"
            onPress={() => handleModalNavigation("myorder")}
          >
            <ButtonText>View Orders</ButtonText>
          </Button>
        </VStack>

        {/* Returns & Refunds Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Returns Policy</Heading>
          <Text>
            Returns are accepted only if the product does not fit or is damaged.
            Refunds are processed within 7-10 days after the return is approved.
          </Text>
          <Button
            variant="outline"
            onPress={() =>
              openLink("https://www.aadibikes.com/policies/return-policy")
            }
          >
            <ButtonText>View Return Policy</ButtonText>
          </Button>
        </VStack>

        {/* Shipping Policy Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Shipping Policy</Heading>
          <Text>
            Orders are shipped within 2-3 days and delivered within 5-6 days.
            International shipping is available for prepaid orders only.
          </Text>
          <Button
            variant="outline"
            onPress={() =>
              openLink("https://www.aadibikes.com/policies/shipping-policy")
            }
          >
            <ButtonText>View Shipping Policy</ButtonText>
          </Button>
        </VStack>

        {/* Exchange & Returns Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Exchange & Returns</Heading>
          <Text>
            Exchanges are allowed for incorrect or damaged items. No returns for
            "change of mind" after dispatch.
          </Text>
          <Button
            variant="outline"
            onPress={() =>
              openLink("https://www.aadibikes.com/policies/exchreturn-policy")
            }
          >
            <ButtonText>View Exchange Policy</ButtonText>
          </Button>
        </VStack>

        {/* Need More Help Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Terms & Conditions</Heading>
          <Button
            variant="outline"
            onPress={() =>
              openLink("https://www.aadibikes.com/policies/terms-conditions")
            }
          >
            <ButtonText>View Terms and Conditions</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default CustomerServiceModal;
