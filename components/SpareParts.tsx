// import React, { useState } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView } from "react-native";
// import { useRouter } from "expo-router";

// import { useCart } from "@/app/context/CartContext";

// const tabs = [
//   { title: "Brake&Clutch" },
//   { title: "Sets" },
//   { title: "Shock Absorber" },
//   { title: "Fuel Pump Motor" },
//   { title: "CDI" },
//   { title: "Speedometer" },
// ];

// const SpareParts = ({ spares }) => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <Box className="pb-8 px-4 md:px-0">
//       <SparePartsInfoTabs
//         tabs={tabs}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <ScrollView>
//         <SparesPanelData activeTab={activeTab} spares={spares} />
//       </ScrollView>
//     </Box>
//   );
// };

// const SparePartsInfoTabs = ({ tabs, activeTab, setActiveTab }: any) => {
//   return (
//     <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
//       <Box className="py-5">
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <HStack space="lg" className="mx-0.5">
//             {tabs.map((tab: any) => (
//               <Pressable
//                 key={tab.title}
//                 className={`py-1 ${activeTab === tab ? "border-b-[3px]" : ""}`}
//                 onPress={() => setActiveTab(tab)}
//               >
//                 <Text
//                   className={`${
//                     activeTab === tab
//                       ? "text-typography-900"
//                       : "text-typography-600"
//                   } font-medium`}
//                 >
//                   {tab.title}
//                 </Text>
//               </Pressable>
//             ))}
//           </HStack>
//         </ScrollView>
//       </Box>
//     </Box>
//   );
// };

// const SparesPanelData = ({ activeTab, spares }: any) => {
//   const { addToCart } = useCart();

//   return (
//     <VStack className="flex-wrap flex-row justify-between">
//       {spares.map((spare: { name: string; data: any[] }) =>
//         spare.name === activeTab.title
//           ? spare.data.map((item, index) => (
//               <Card
//                 key={index}
//                 className="p-5 rounded-lg w-full md:w-[30%] m-1 flex flex-col justify-between"
//               >
//                 <Image
//                   source={{ uri: item.src }}
//                   className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
//                   alt={`${item.title} image`}
//                 />
//                 <Text className="text-sm font-normal mb-2 text-typography-700">
//                   {item.title}
//                 </Text>
//                 <VStack className="mb-6">
//                   <Text size="md" className="mb-4">
//                     ₹{item.price}
//                   </Text>
//                 </VStack>
//                 <Box className="flex flex-row items-end mt-auto">
//                   <Button
//                     className="px-4 py-2 mr-2 flex-1"
//                     onPress={() => addToCart(item, activeTab.title)}
//                   >
//                     <ButtonText size="sm">Add to cart</ButtonText>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="px-4 py-2 border-outline-300 flex-1"
//                     onPress={() => console.log(`${item.title}`)}
//                   >
//                     <ButtonText size="sm" className="text-typography-600">
//                       Wishlist
//                     </ButtonText>
//                   </Button>
//                 </Box>
//               </Card>
//             ))
//           : null
//       )}
//     </VStack>
//   );
// };


// export default SpareParts;







// import React, { useState } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView } from "react-native";
// import { useCart } from "@/app/context/CartContext";

// const tabs = [
//   { title: "Brake&Clutch" },
//   { title: "Sets" },
//   { title: "Shock Absorber" },
//   { title: "Fuel Pump Motor" },
//   { title: "CDI" },
//   { title: "Speedometer" },
// ];

// const SpareParts = ({ spares }) => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <Box className="pb-8 px-4 md:px-0">
//       <SparePartsInfoTabs
//         tabs={tabs}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <ScrollView>
//         <SparesPanelData activeTab={activeTab} spares={spares} />
//       </ScrollView>
//     </Box>
//   );
// };

// const SparePartsInfoTabs = ({ tabs, activeTab, setActiveTab }: any) => {
//   return (
//     <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
//       <Box className="py-5">
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <HStack space="lg" className="mx-0.5">
//             {tabs.map((tab: any) => (
//               <Pressable
//                 key={tab.title}
//                 className={`py-1 ${activeTab === tab ? "border-b-[3px]" : ""}`}
//                 onPress={() => setActiveTab(tab)}
//               >
//                 <Text
//                   className={`${
//                     activeTab === tab
//                       ? "text-typography-900"
//                       : "text-typography-600"
//                   } font-medium`}
//                 >
//                   {tab.title}
//                 </Text>
//               </Pressable>
//             ))}
//           </HStack>
//         </ScrollView>
//       </Box>
//     </Box>
//   );
// };

// const SparesPanelData = ({ activeTab, spares }: any) => {
//   const { addToCart } = useCart();

//   return (
//     <VStack className="flex-wrap flex-row justify-between">
//       {spares.map((spare: { name: string; data: any[] }) =>
//         spare.name === activeTab.title
//           ? spare.data.map((item, index) => {
//               const originalPrice = parseFloat(item.price) + 500; // Example: Adding ₹500 as the original price
//               const savings = originalPrice - parseFloat(item.price);
//               const isInStock = item.rating !== null; // Assuming `rating` is used as stock indicator

//               return (
//                 <Card
//                   key={index}
//                   className="p-5 rounded-lg w-full md:w-[30%] m-1 flex flex-col justify-between relative"
//                 >
//                   {/* Image */}
//                   <Image
//                     source={{ uri: item.src }}
//                     className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
//                     alt={`${item.title} image`}
//                   />

//                   {/* Savings */}
//                   {savings > 0 && (
//                     <Box className="absolute top-2 left-2 bg-red-500 py-1 px-2 rounded-md">
//                       <Text className="text-xs font-bold text-white">
//                         Saves ₹{savings.toFixed(0)}
//                       </Text>
//                     </Box>
//                   )}

//                   {/* Title and Description */}
//                   <Text className="text-sm font-normal mb-2 text-typography-700">
//                     {item.title}
//                   </Text>
//                   <VStack className="mb-6">
//                     <Text size="sm" className="mb-1 text-gray-500">
//                       {item.description}
//                     </Text>
//                     <Text size="md" className="mb-4">
//                       ₹{item.price}
//                     </Text>
//                   </VStack>

//                   {/* Stock Info */}
//                   <Text
//                     className={`text-sm font-bold ${
//                       isInStock ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {isInStock ? "In Stock" : "Out of Stock"}
//                   </Text>

//                   {/* Buttons */}
//                     <Box className="flex flex-row items-end mt-auto">
//                     <Button
//                       className={`px-4 py-2 mr-2 flex-1 ${
//                       !isInStock ? "opacity-50" : ""
//                       }`}
//                       onPress={() =>
//                       isInStock &&
//                       addToCart(
//                         {
//                         id: item.id.toString(),
//                         title: item.title,
//                         price: item.price,
//                         },
//                         activeTab.title
//                       )
//                       }
//                       disabled={!isInStock}
//                       style={{ backgroundColor: "#007bff" }}
//                     >
//                       <ButtonText size="sm">
//                       {isInStock ? "Add to cart" : "Unavailable"}
//                       </ButtonText>
//                     </Button>
//                     </Box>
//                 </Card>
//               );
//             })
//           : null
//       )}
//     </VStack>
//   );
// };

// export default SpareParts;












import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView } from "react-native";
import { useCart } from "@/app/context/CartContext";

const tabs = [
  { title: "Brake&Clutch" },
  { title: "Sets" },
  { title: "Shock Absorber" },
  { title: "Fuel Pump Motor" },
  { title: "CDI" },
  { title: "Speedometer" },
];

const SpareParts = ({ spares }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Box className="pb-8 px-4 md:px-0">
      <SparePartsInfoTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ScrollView>
        <SparesPanelData activeTab={activeTab} spares={spares} />
      </ScrollView>
    </Box>
  );
};

const SparePartsInfoTabs = ({ tabs, activeTab, setActiveTab }: any) => {
  return (
    <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
      <Box className="py-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="lg" className="mx-0.5">
            {tabs.map((tab: any) => (
              <Pressable
                key={tab.title}
                className={`py-1 ${activeTab === tab ? "border-b-[3px]" : ""}`}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  className={`${
                    activeTab === tab
                      ? "text-typography-900"
                      : "text-typography-600"
                  } font-medium`}
                >
                  {tab.title}
                </Text>
              </Pressable>
            ))}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const SparesPanelData = ({ activeTab, spares }: any) => {
  const { addToCart } = useCart();

  return (
    <VStack className="flex-wrap flex-row justify-between">
      {spares.map((spare: { name: string; data: any[] }) =>
        spare.name === activeTab.title
          ? spare.data.map((item, index) => {
              const originalPrice = parseFloat(item.price) + 500; // Add ₹500 to simulate original price
              const savings = originalPrice - parseFloat(item.price);
              const isInStock = item.rating !== null;

              return (
                <Card
                  key={index}
                  className="p-5 rounded-lg w-full md:w-[30%] m-1 flex flex-col justify-between"
                >
                  <Image
                    source={{ uri: item.src }}
                    className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
                    alt={`${item.title} image`}
                  />
                  {savings > 0 && (
                    <Box className="absolute top-2 left-2 bg-[#FF5722] px-2 py-1 rounded-md">
                      <Text className="text-white text-xs font-bold">
                        Saves ₹{savings.toFixed(0)}
                      </Text>
                    </Box>
                  )}
                  <Text className="text-sm font-normal mb-2 text-typography-700">
                    {item.title}
                  </Text>
                  <Text className="text-sm text-typography-500 mb-4">
                    {item.description}
                  </Text>
                  <VStack className="mb-6">
                    <Text
                      size="md"
                      className="mb-1 font-bold text-typography-900"
                    >
                      ₹{item.price}
                    </Text>
                    <Text
                      className={`font-medium ${
                        isInStock ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {isInStock ? "In Stock" : "Out of Stock"}
                    </Text>
                  </VStack>
                  <Box className="flex flex-row items-end mt-auto">
                    <Button
                      className={`px-4 py-2 mr-2 flex-1 ${
                        isInStock ? "bg-[#007bff]" : "bg-[#ddd]"
                      }`}
                      onPress={() =>
                        isInStock && addToCart(item, activeTab.title)
                      }
                      disabled={!isInStock}
                    >
                      <ButtonText size="sm" className="text-white font-bold">
                        {isInStock ? "Add to Cart" : "Unavailable"}
                      </ButtonText>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 py-2 border-outline-300 flex-1"
                    >
                      <ButtonText size="sm" className="text-typography-600">
                        Wishlist
                      </ButtonText>
                    </Button>
                  </Box>
                </Card>
              );
            })
          : null
      )}
    </VStack>
  );
};

export default SpareParts;
