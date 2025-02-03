import React from "react";
import {HStack} from "@/components/ui/hstack";
import {Text} from "@/components/ui/text";
import {Heading} from "@/components/ui/heading";
import {VStack} from "@/components/ui/vstack";
import { Link, LinkText } from "@/components/ui/link";
import {Icon} from "@/components/ui/icon";
import {Pressable} from "@/components/ui/pressable";
import {Divider} from "@/components/ui/divider";
import {Button, ButtonText} from "@/components/ui/button";
import {Avatar,AvatarFallbackText, AvatarImage} from "@/components/ui/avatar";
import {
  ShoppingBag,
  ChevronRight,
  Settings,
  User,
  MessageCircleQuestionIcon,
  HeadsetIcon,
  Package,
} from "lucide-react-native";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/app/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
// import LogoutAlertDialog from "./LogoutAlertDialog";

const MobileProfilePage = ({ isActive }: any) => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] = React.useState(false);
  return (
    <ProtectedRoute>
      <ScrollView style={{ display: isActive ? "flex" : "none" }}>
        <VStack className="px-5 py-4 flex-1" space="lg">
          <ProfileCard />
          <Divider className="my-2" />
          <PersonalInfoSection />
          <Divider className="my-2" />
          <OrderSection />
          <Divider className="my-2" />
          <SupportSection />
          <Divider className="my-2" />
          <LogoutButton
            openLogoutAlertDialog={openLogoutAlertDialog}
            setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
          />
        </VStack>
        {/* <LogoutAlertDialog
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        openLogoutAlertDialog={openLogoutAlertDialog}
      /> */}
      </ScrollView>
    </ProtectedRoute>
  );
};

const ProfileCard = () => {
  const { user, userData } = useAuth();
  const router = useRouter();

  const handleModalNavigation = (type: string) => {
    router.push({
      pathname: "/modal",
      params: { modalType: type },
    });
  };
  return (
    <HStack className="justify-between items-center">
      <HStack space="md">
        <Avatar className="bg-primary-500">
          <AvatarFallbackText>
            ${userData.firstName} ${userData.lastName}
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <VStack>
          <Text>
            {userData ? `${userData.firstName} ${userData.lastName}` : "User"}
          </Text>
          <Link>
            <LinkText size="sm" className="text-typography-900">
              Profile
            </LinkText>
          </Link>
        </VStack>
      </HStack>
    </HStack>
  );
};

const PersonalInfoSection = () => {
  const router = useRouter();

  const handleModalNavigation = (type: string) => {
    router.push({
      pathname: "/modal",
      params: { modalType: type },
    });
  };
  return (
    <VStack space="lg">
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={User} />
          <Text>Personal Info</Text>
        </HStack>
        <Pressable onPress={() => handleModalNavigation("personal")}>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={Settings} />
          <Text>Account</Text>
        </HStack>
        <Pressable onPress={() => handleModalNavigation("account")}>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const OrderSection = () => {
  const router = useRouter();

  const handleModalNavigation = (type: string) => {
    router.push({
      pathname: "/modal",
      params: { modalType: type },
    });
  };
  return (
    <VStack space="lg">
      <Heading className="mb-1">Orders</Heading>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={ShoppingBag} />
          <Text>My Orders</Text>
        </HStack>
        <Pressable onPress={() => handleModalNavigation("myorder")}>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={Package} />
          <Text>Previous Orders</Text>
        </HStack>
        <Pressable onPress={() => handleModalNavigation("previousorder")}>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const SupportSection = () => {
  const router = useRouter();

  const handleModalNavigation = (type: string) => {
    router.push({
      pathname: "/modal",
      params: { modalType: type },
    });
  };
  return (
    <VStack space="lg">
      <Heading className="mb-1">Support</Heading>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={MessageCircleQuestionIcon} />
          <Text>Get Help</Text>
        </HStack>
        <Pressable onPress={() => handleModalNavigation("gethelp")}>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack className="justify-between">
        <HStack space="md">
          <Icon as={HeadsetIcon} />
          <Text>Contact Support</Text>
        </HStack>
        <Pressable onPress={() => handleModalNavigation("support")}>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/login"); // Redirect to login screen after logout
  };

  return (
    <Button action="secondary" variant="outline" onPress={handleLogout}>
      <ButtonText>Logout</ButtonText>
    </Button>
  );
};

export default MobileProfilePage;
