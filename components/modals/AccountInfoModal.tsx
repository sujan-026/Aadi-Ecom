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
import { updatePassword } from "firebase/auth";
import { useAuth } from "@/app/context/AuthContext";

const AccountInfoModal = () => {
  const { user, logout } = useAuth(); // Get authenticated user
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Card");

  const handleChangePassword = async () => {
    if (!user) {
      Alert.alert("Error", "You must be logged in to update your password.");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await updatePassword(user, newPassword);
      Alert.alert("Success", "Your password has been updated.");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    }
  };

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
          onPress: async () => {
            await logout(); // Log user out
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
            <InputField
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </Input>
          <Input>
            <InputField
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </Input>
          <Button onPress={handleChangePassword}>
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
