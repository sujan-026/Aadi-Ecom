// // import { Text } from "react-native";

// // export default function SpareParts({ bikes }) {
// //   return <Text style={{ fontSize: 30 }}>{bikes.name}</Text>;
// // }

// import { Card } from "@/components/ui/card";
// import { Image } from "@/components/ui/image";
// import { VStack } from "@/components/ui/vstack";
// import { Box } from "@/components/ui/box";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Heading } from "@/components/ui/heading";

// import { Text } from "react-native";

// export default function SpareParts({ bikes }) {
//   return (
//     <Card className="p-5 rounded-lg max-w-[360px] m-3 flex-1">
//       <Image
//         source={{
//           uri: "https://gluestack.github.io/public-blog-video-assets/saree.png",
//         }}
//         className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
//         alt="image"
//         resizeMode="contain"
//       />
//       <Text className="text-sm font-normal mb-2 text-typography-700">
//         {bikes.name}
//       </Text>
//       <VStack className="mb-6">
//         <Heading size="md" className="mb-4">
//           {bikes.price}
//         </Heading>
//         <Text size="sm">{bikes.description}</Text>
//       </VStack>
//       <Box className="flex-col sm:flex-row">
//         <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
//           <ButtonText size="sm">Add to cart</ButtonText>
//         </Button>
//         <Button
//           variant="outline"
//           className="px-4 py-2 border-outline-300 sm:flex-1"
//         >
//           <ButtonText size="sm" className="text-typography-600">
//             Wishlist
//           </ButtonText>
//         </Button>
//       </Box>
//     </Card>
//   );
// }

import React from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

const tabs = [
  {
    title: "Brake&Clutch",
  },
  {
    title: "Sets",
  },
  {
    title: "Shock Absorber",
  },
  {
    title: "Fuel Pump Motor",
  },
  {
    title: "CDI",
  },
  {
    title: "Speedometer",
  },
];

const SpareParts = ({ spares }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

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
                  className={`$${
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
  const router = useRouter();

  return (
    <VStack className="flex-wrap flex-row justify-between">
      {spares.map((spare: { name: string; data: any[] }) =>
        spare.name === activeTab.title
          ? spare.data.map(
              (
                item: { src: string; title: string; price: string },
                index: number
              ) => (
                <Card
                  key={index}
                  className="p-5 rounded-lg w-full md:w-[50%] m-1 flex flex-col justify-between"
                >
                  <Image
                    source={{ uri: item.src }}
                    className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
                    alt={`${item.title} image`}
                    resizeMode="contain"
                  />
                  <Text className="text-sm font-normal mb-2 text-typography-700">
                    {item.title}
                  </Text>
                  <VStack className="mb-6">
                    <Text size="md" className="mb-4">
                      {item.price}
                    </Text>
                  </VStack>
                  <Box className="flex flex-row items-end mt-auto">
                    <Button
                      className="px-4 py-2 mr-2 flex-1"
                      onPress={() => console.log(`${item.title, item.id}`)}
                    >
                      <ButtonText size="sm">Add to cart</ButtonText>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 py-2 border-outline-300 flex-1"
                      onPress={() => console.log(`${item.title}`)}
                    >
                      <ButtonText size="sm" className="text-typography-600">
                        Wishlist
                      </ButtonText>
                    </Button>
                  </Box>
                </Card>
              )
            )
          : null
      )}
    </VStack>
  );
};

export default SpareParts;
