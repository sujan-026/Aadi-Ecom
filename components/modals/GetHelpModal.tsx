import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const GetHelpModal = () => {
  return (
    <VStack space="lg" className="p-5">
      <Heading>Get Help</Heading>
      <Text>Need help? Browse FAQs or reach out to our support team.</Text>
    </VStack>
  );
};

export default GetHelpModal;
