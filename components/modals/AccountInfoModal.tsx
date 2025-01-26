import React, { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { ScrollView, Alert } from "react-native";
import {
  RadioGroup,
  Radio,
  RadioLabel,
  RadioIndicator,
} from "@/components/ui/radio";

const AccountInfoModal = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Card");

  const handleDeactivateAccount = () => {
    Alert.alert(
      "Confirm Deactivation",
      "Are you sure you want to deactivate your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Deactivate",
          style: "destructive",
          onPress: () => {
            // Add deactivation logic here
            console.log("Account Deactivated");
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <VStack space="lg">
        <Heading size="lg">Account Settings</Heading>

        {/* Password Management Section */}
        <VStack space="md">
          <Heading size="sm">Password Management</Heading>
          <Input>
            <InputField placeholder="New Password" secureTextEntry />
          </Input>
          <Input>
            <InputField placeholder="Confirm Password" secureTextEntry />
          </Input>
          <Button>
            <ButtonText>Change Password</ButtonText>
          </Button>
        </VStack>

        <Divider />

        {/* Payment Methods Section */}
        <VStack space="md">
          <Heading size="sm">Payment Methods</Heading>
          <RadioGroup
            value={selectedPaymentMethod}
            onChange={(value) => setSelectedPaymentMethod(value)}
          >
            <VStack space="sm">
              <Radio value="Credit Card">
                <RadioIndicator />
                <RadioLabel>Credit Card</RadioLabel>
              </Radio>
              <Radio value="Debit Card">
                <RadioIndicator />
                <RadioLabel>Debit Card</RadioLabel>
              </Radio>
              <Radio value="PayPal">
                <RadioIndicator />
                <RadioLabel>PayPal</RadioLabel>
              </Radio>
              <Radio value="Net Banking">
                <RadioIndicator />
                <RadioLabel>Net Banking</RadioLabel>
              </Radio>
            </VStack>
          </RadioGroup>
          <Button>
            <ButtonText>Update Payment Method</ButtonText>
          </Button>
        </VStack>

        <Divider />

        {/* Account Deactivation Section */}
        <VStack space="md">
          <Heading size="sm">Account Actions</Heading>
          <Button
            variant="outline"
            action="negative"
            onPress={handleDeactivateAccount}
          >
            <ButtonText>Deactivate Account</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default AccountInfoModal;
