// import { useEffect } from "react";
// import { useRouter } from "expo-router";
// import { useAuth } from "@/app/context/AuthContext";
// import MobileProfilePage from "@/components/MobileProfilePage";

// const ProfileScreen = () => {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push("/login"); // Redirect to login
//     }
//   }, [user]);

//   // return user ? <MobileProfilePage isActive={true} /> : router.push("/login");
//   if (user) {
//     return <MobileProfilePage isActive={true} />;
//   } else{
//     router.push("/login");
//   }
// };

// export default ProfileScreen;





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
