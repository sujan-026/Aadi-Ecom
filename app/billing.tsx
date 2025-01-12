import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";

const BillingScreen = () => {
  const router = useRouter();

  const handlePayment = () => {
    alert("Payment Successful");
    router.push("/(tabs)");
  };

  return (
    <VStack space="lg" className="p-5">
      <Text className="text-2xl font-bold">Billing Information</Text>
      <Text>Review your order and proceed to payment.</Text>

      <Button onPress={handlePayment} className="mt-5">
        <ButtonText>Pay Now</ButtonText>
      </Button>
    </VStack>
  );
};

export default BillingScreen;
