// import React from "react";
// import { Box } from "@/components/ui/box";
// import { Text } from "@/components/ui/text";
// import { HStack } from "@/components/ui/hstack";
// import { Icon, SearchIcon } from "@/components/ui/icon";
// import { Pressable } from "@/components/ui/pressable";
// import { Image } from "@/components/ui/image";
// import { ShoppingCart, User } from "lucide-react-native";
// import { useRouter } from "expo-router";
// import { Link } from "expo-router";

// const Header = () => {
//   const router = useRouter();
//   const [selectedTab, setSelectedTab] = React.useState("All Parts");

//   return (
//     <Box className="w-full bg-white px-4 py-3">
//       {/* Header Top Section */}
//       <HStack className="items-center justify-between">
//         {/* Logo Section */}
//         <Box className="flex-1 pr-3 ">
//           <Image
//             source={require("@/assets/logo.jpg")}
//             className="w-40 object-contain"
//             alt="Logo"
//             resizeMode="contain"
//           />
//         </Box>

//         {/* Icons Section */}
//         <HStack space="lg" className="items-center">
//           <Pressable onPress={() => router.push("/(tabs)/cart")}>
//             <Icon as={ShoppingCart} size="md" />
//           </Pressable>
//           <Pressable onPress={() => router.push("/(tabs)/profile")}>
//             <Icon as={User} size="md" />
//           </Pressable>
//         </HStack>
//       </HStack>

//       {/* Search Bar Section */}
//       <HStack className="mt-3 h-12 items-center justify-center " space="md">
//         <HStack className="rounded-full p-1.5 items-center border border-outline-200 w-full max-w-lg justify-between bg-white">
//           {/* Tab: All Parts */}
//           <Pressable
//             className={`rounded-full px-4 py-2 ${
//               selectedTab === "All Parts"
//                 ? "bg-background-100"
//                 : "bg-transparent"
//             } flex items-center justify-center`}
//             onPress={() => setSelectedTab("All Parts")}
//           >
//             <Link href="/products" asChild>
//               <Pressable>
//                 <Text size="sm" className="font-medium text-black">
//                   All Parts
//                 </Text>
//               </Pressable>
//             </Link>
//           </Pressable>

//           {/* Tab: Popular Models */}
//           <Pressable
//             className={`rounded-full px-4 py-2 ${
//               selectedTab === "Popular Models"
//                 ? "bg-background-100"
//                 : "bg-transparent"
//             } flex items-center justify-center`}
//             onPress={() => setSelectedTab("Popular Models")}
//           >
//             <Link href="/CompanyName" asChild>
//               <Pressable>
//                 <Text size="sm" className="font-medium text-black">
//                   Popular Models
//                 </Text>
//               </Pressable>
//             </Link>
//           </Pressable>

//           {/* Search Icon Button */}
//           <Pressable className="ml-4 p-3 bg-[#007bff] rounded-full flex items-center justify-center">
//             <Icon as={SearchIcon} className="w-5 h-5 text-typography-0" />
//           </Pressable>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// export default Header;









import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Icon, SearchIcon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
import { ShoppingCart, User } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { TextInput, View, TouchableOpacity } from "react-native";

const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search and navigate to the results page
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Box className="w-full bg-white px-4 py-3">
      {/* Header Top Section */}
      <HStack className="items-center justify-between">
        {/* Logo Section */}
        <Box className="flex-1 pr-3">
          <Image
            source={require("@/assets/logo.jpg")}
            className="w-40 object-contain"
            alt="Logo"
            resizeMode="contain"
          />
        </Box>

        {/* Icons Section */}
        <HStack space="lg" className="items-center">
          <Pressable onPress={() => router.push("/(tabs)/cart")}>
            <Icon as={ShoppingCart} size="md" />
          </Pressable>
          <Pressable onPress={() => router.push("/(tabs)/profile")}>
            <Icon as={User} size="md" />
          </Pressable>
        </HStack>
      </HStack>

      {/* Search Bar Section */}
      <HStack className="mt-3 h-12 items-center justify-center" space="md">
        <HStack className="rounded-full p-1.5 items-center border border-outline-200 w-full max-w-lg justify-between bg-white">
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 8,
              paddingHorizontal: 12,
              fontSize: 14,
              color: "#333",
            }}
            placeholder="Search for products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            onPress={handleSearch}
            className="ml-4 p-3 bg-[#007bff] rounded-full flex items-center justify-center"
          >
            <Icon as={SearchIcon} className="w-5 h-5 text-white" />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
