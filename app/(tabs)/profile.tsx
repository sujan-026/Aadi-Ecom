import { useEffect, useCallback } from "react";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "@/app/context/AuthContext";
import MobileProfilePage from "@/components/MobileProfilePage";

const ProfileScreen = () => {
  const { user } = useAuth();
  const router = useRouter();

  // Ensure navigation happens when the user visits ProfileScreen
  useFocusEffect(
    useCallback(() => {
      if (!user) {
        router.replace("/login"); // Ensure the user is redirected every time they enter the Profile tab
      }
    }, [user])
  );

  if (!user) {
    return null; // Prevent rendering if user is being redirected
  }

  return <MobileProfilePage isActive={true} />;
};

export default ProfileScreen;
