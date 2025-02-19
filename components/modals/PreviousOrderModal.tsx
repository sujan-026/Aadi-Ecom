import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const PreviousModal = () => {
  return (
    <VStack space="lg" className="p-5">
      <Heading>Previous Orders</Heading>
      <Text>Check the history of all your past orders.</Text>
    </VStack>
  );
};

export default PreviousModal;
