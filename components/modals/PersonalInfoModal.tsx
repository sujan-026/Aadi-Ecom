// import { Modal } from "react-native";
// import { Box } from "@/components/ui/box";
// import { Button, ButtonText } from "@/components/ui/button";
// import React from "react";
// import { VStack } from "@/components/ui/vstack";
// import { Text } from "@/components/ui/text";
// import {
//   Avatar,
//   AvatarFallbackText,
//   AvatarImage,
// } from "@/components/ui/avatar";

// const PersonalBaseModal = () => {
//   return (
//     <VStack space="px-2">
//       <Avatar size="xl" className="self-center mb-4">
//         <AvatarFallbackText>Sujan P</AvatarFallbackText>
//         <AvatarImage
//           source={{
//             uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//           }}
//         />
//       </Avatar>
//       <Text className="text-md">
//         <Text className="font-bold">Name: </Text>Sujan P
//       </Text>
//       <Text className="text-md">
//         <Text className="font-bold">Last Name: </Text>Patel
//       </Text>
//       <Text className="text-md">
//         <Text className="font-bold">Email: </Text>sujan@example.com
//       </Text>
//       <Text className="text-md">
//         <Text className="font-bold">Phone: </Text>+91 98765 43210
//       </Text>
//       <Text className="text-md">
//         <Text className="font-bold">Address: </Text>New Delhi, India
//       </Text>
//     </VStack>
//   );
// };

// export default PersonalBaseModal;






import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";

const PersonalInfoModal = () => {
  return (
    <VStack space="lg" className="p-5">
      <Heading>Personal Information</Heading>
      <Text>Update your address, contact details, and preferences here.</Text>
      <Button>
        <ButtonText>Save Changes</ButtonText>
      </Button>
    </VStack>
  );
};

export default PersonalInfoModal;
