import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const MyOrderModal = () => {
  return (
    <VStack space="lg" className="p-5">
      <Heading>My Orders</Heading>
      <Text>You have 3 active orders in progress.</Text>
    </VStack>
  );
};

export default MyOrderModal;
