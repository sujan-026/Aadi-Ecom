import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";

const SupportModal = () => {
  return (
    <VStack space="lg" className="p-5">
      <Heading>Contact Support</Heading>
      <Button>
        <ButtonText>Call Support</ButtonText>
      </Button>
    </VStack>
  );
};

export default SupportModal;
