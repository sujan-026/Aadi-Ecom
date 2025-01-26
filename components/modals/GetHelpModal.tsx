import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { ScrollView, Linking, Alert } from "react-native";

const GetHelpModal = () => {
  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Unable to open the link.");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <VStack space="lg">
        <Heading size="lg">Get Help</Heading>
        <Text>
          Need assistance? Browse our FAQs or get in touch with our support team
          for help.
        </Text>

        {/* FAQ Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Frequently Asked Questions</Heading>
          <Button
            variant="outline"
            onPress={() => openLink("https://example.com/faqs")}
          >
            <ButtonText>Visit FAQs</ButtonText>
          </Button>
        </VStack>

        {/* Contact Support Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Contact Support</Heading>
          <Text>Email us at:</Text>
          <Button
            variant="outline"
            onPress={() => Linking.openURL("mailto:support@example.com")}
          >
            <ButtonText>support@example.com</ButtonText>
          </Button>
          <Text>Or call us at:</Text>
          <Button
            variant="outline"
            onPress={() => Linking.openURL("tel:+1234567890")}
          >
            <ButtonText>+123 456 7890</ButtonText>
          </Button>
        </VStack>

        {/* Chat Support Section */}
        <Divider />
        <VStack space="md">
          <Heading size="sm">Chat with Us</Heading>
          <Text>
            Prefer chatting? Our support team is available to assist you.
          </Text>
          <Button
            variant="outline"
            onPress={() => openLink("https://example.com/chat")}
          >
            <ButtonText>Start Chat</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default GetHelpModal;
