// import React, { useState } from "react";
// import { VStack } from "@/components/ui/vstack";
// import { Heading } from "@/components/ui/heading";
// import { Input, InputField } from "@/components/ui/input";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Divider } from "@/components/ui/divider";
// import { ScrollView, Alert } from "react-native";

// const PersonalInfoModal = () => {
//   const [contactNumber, setContactNumber] = useState("+1234567890");
//   const [addressList, setAddressList] = useState([
//     "123 Main St, Springfield, IL",
//     "456 Elm St, Metropolis, NY",
//   ]);

//   const handleAddAddress = () => {
//     Alert.prompt(
//       "Add New Address",
//       "Enter the new address:",
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Add",
//           onPress: (newAddress) => {
//             if (newAddress) {
//               setAddressList((prev) => [...prev, newAddress]);
//             }
//           },
//         },
//       ],
//       "plain-text"
//     );
//   };

//   return (
//     <>
//       <ScrollView contentContainerStyle={{ padding: 20 }}>
//         {/* Personal Information Section */}
//         <VStack space="md">
//           <Heading size="sm">Personal Information</Heading>
//           <Input>
//             <InputField placeholder="Full Name" defaultValue="John Doe" />
//           </Input>
//           <Input>
//             <InputField
//               placeholder="Email"
//               defaultValue="john.doe@example.com"
//             />
//           </Input>
//           <Input>
//             <InputField
//               placeholder="Contact Number"
//               value={contactNumber}
//               onChangeText={(text) => setContactNumber(text)}
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
//           {addressList.map((address, index) => (
//             <VStack key={index} space="sm">
//               <Input>
//                 <InputField value={address} editable={false} />
//               </Input>
//             </VStack>
//           ))}
//           <Button variant="outline" onPress={handleAddAddress}>
//             <ButtonText>Add New Address</ButtonText>
//           </Button>
//         </VStack>
//       </ScrollView>
//     </>
//   );
// };

// export default PersonalInfoModal;






import React, { useState, useEffect } from "react";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { ScrollView, Alert, ActivityIndicator } from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/app/context/AuthContext";

const PersonalInfoModal = () => {
  const { user, userData, loading } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
      setContactNumber(userData.contactNumber || "");
      setAddressList(userData.addressList || []);
    }
  }, [userData]);

  if (loading) {
    return (
      <VStack space="md" className="items-center justify-center h-full">
        <ActivityIndicator size="large" color="#007bff" />
        <Heading size="sm">Loading profile...</Heading>
      </VStack>
    );
  }

  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "User", user.uid),
        {
          firstName,
          lastName,
          email: user.email, // Ensure email is saved
        },
        { merge: true }
      );

      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Could not update profile.");
    }
  };

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
              const updatedAddresses = [...addressList, newAddress];
              setAddressList(updatedAddresses);
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
            <InputField
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </Input>
          <Input>
            <InputField
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </Input>
          <Input>
            <InputField
              placeholder="Email"
              value={user?.email || ""}
              editable={false} // Email cannot be changed
            />
          </Input>
          <Input>
            <InputField
              placeholder="Contact Number"
              value={contactNumber}
              onChangeText={setContactNumber}
            />
          </Input>
          <Button onPress={handleUpdateProfile}>
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
