import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

const AccountInfoModal = () => {
  return (
    <VStack space="lg" className="p-5">
      <Heading>Account Settings</Heading>
      <Input>
        <InputField placeholder="Change Password" />
      </Input>
      <Button>
        <ButtonText>Update</ButtonText>
      </Button>
    </VStack>
  );
};

export default AccountInfoModal;
