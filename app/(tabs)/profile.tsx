// import MobileProfilePage from "@/components/MobileProfilePage";
// import { Text } from "@/components/ui/text";

// export default function ProfileScreen() {
//   return <MobileProfilePage isActive={true} />;
// }


import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@/app/context/AuthContext";
import MobileProfilePage from "@/components/MobileProfilePage";

const ProfileScreen = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login
    }
  }, [user]);

  return user ? <MobileProfilePage isActive={true} /> : router.push("/login");
};

export default ProfileScreen;
