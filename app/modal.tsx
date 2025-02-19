import React, { useEffect } from "react";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import PersonalBaseModal from "@/components/modals/PersonalInfoModal";
import { useLocalSearchParams, useNavigation } from "expo-router";
import AccountInfoModal from "@/components/modals/AccountInfoModal";
import MyOrderModal from "@/components/modals/MyOrderModal";
import PreviousModal from "@/components/modals/PreviousOrderModal";
import SupportModal from "@/components/modals/SupportModal";
import GetHelpModal from "@/components/modals/GetHelpModal";
import CustomerServiceModal from "@/components/modals/CustomerServiceModal";

const BaseModal = () => {
  const { modalType } = useLocalSearchParams() as { modalType: string };
  const navigation = useNavigation();

  const modalTitles: Record<string, string> = {
    profile: "Profile Information",
    account: "Account Settings",
    personal: "Personal Details",
    myorder: "My Orders",
    previousorder: "Previous Orders",
    gethelp: "Get Help",
    support: "Contact Support",
    customerService: "Customer Service",
  };

  // Set dynamic title based on modal type
  useEffect(() => {
    const title = modalTitles[modalType] || "Profile";
    navigation.setOptions({ title });
  }, [modalType, navigation]);

  const renderModalContent = () => {
    switch (modalType) {
      case "profile":
        return <Text>Profile modal</Text>;
      case "personal":
        return <PersonalBaseModal />;
      case "account":
        return <AccountInfoModal />;
      case "myorder":
        return <MyOrderModal />;
      case "previousorder":
        return <PreviousModal />;
      case "gethelp":
        return <GetHelpModal />;
      case "customerService":
        return <CustomerServiceModal />;
      default:
        return <SupportModal />;
    }
  };

  return <Box>{renderModalContent()}</Box>;
};

export default BaseModal;
