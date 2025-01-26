// import React from "react";
// import { VStack } from "@/components/ui/vstack";
// import { Heading } from "@/components/ui/heading";
// import { Input, InputField } from "@/components/ui/input";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Divider } from "@/components/ui/divider";
// import { ScrollView } from "react-native";

// const PersonalInfoModal = () => {
//   return (
//     <>
//       <ScrollView contentContainerStyle={{ padding: 20 }}>
//         <VStack space="md">
//           {/* Personal Information Section */}
//           <Heading size="sm">Personal Information</Heading>
//           <Input>
//             <InputField placeholder="Full Name" defaultValue="John Doe" />
//           </Input>
//           <Input>
//             <InputField
//               placeholder="Primary Email"
//               defaultValue="john.doe@example.com"
//               keyboardType="email-address"
//             />
//           </Input>
//           <Input>
//             <InputField
//               placeholder="Secondary Email (optional)"
//               defaultValue=""
//               keyboardType="email-address"
//             />
//           </Input>
//           <Input>
//             <InputField
//               placeholder="Phone Number"
//               defaultValue="+1234567890"
//               keyboardType="phone-pad"
//             />
//           </Input>
//           <Input>
//             <InputField
//               placeholder="Alternate Phone Number (optional)"
//               defaultValue=""
//               keyboardType="phone-pad"
//             />
//           </Input>
//           <Button>
//             <ButtonText>Update Personal Info</ButtonText>
//           </Button>
//         </VStack>

//         <Divider />

//         {/* Address Management Section */}
//         <VStack space="md">
//           <Heading size="sm">Saved Addresses</Heading>
//           <Button variant="outline">
//             <ButtonText>Manage Addresses</ButtonText>
//           </Button>
//         </VStack>
//       </ScrollView>
//     </>
//   );
// };

// export default PersonalInfoModal;



import React, { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { ScrollView, Alert } from "react-native";

const PersonalInfoModal = () => {
  const [contactNumber, setContactNumber] = useState("+1234567890");
  const [addressList, setAddressList] = useState([
    "123 Main St, Springfield, IL",
    "456 Elm St, Metropolis, NY",
  ]);

  const handleAddAddress = () => {
    Alert.prompt(
      "Add New Address",
      "Enter the new address:",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Add",
          onPress: (newAddress) => {
            if (newAddress) {
              setAddressList((prev) => [...prev, newAddress]);
            }
          },
        },
      ],
      "plain-text"
    );
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Personal Information Section */}
        <VStack space="md">
          <Heading size="sm">Personal Information</Heading>
          <Input>
            <InputField placeholder="Full Name" defaultValue="John Doe" />
          </Input>
          <Input>
            <InputField
              placeholder="Email"
              defaultValue="john.doe@example.com"
            />
          </Input>
          <Input>
            <InputField
              placeholder="Contact Number"
              value={contactNumber}
              onChangeText={(text) => setContactNumber(text)}
            />
          </Input>
          <Button>
            <ButtonText>Update Personal Info</ButtonText>
          </Button>
        </VStack>

        <Divider />

        {/* Address Management Section */}
        <VStack space="md">
          <Heading size="sm">Saved Addresses</Heading>
          {addressList.map((address, index) => (
            <VStack key={index} space="sm">
              <Input>
                <InputField value={address} editable={false} />
              </Input>
            </VStack>
          ))}
          <Button variant="outline" onPress={handleAddAddress}>
            <ButtonText>Add New Address</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </>
  );
};

export default PersonalInfoModal;

