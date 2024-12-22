import React from "react";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import bike from "@/assets/bike.json";

const BikeList = () => {
  const { bikeList } = useLocalSearchParams();

  return (
    // <ScrollView className="flex-1 w-full">
    //   <VStack className="flex-1 items-center justify-center p-6">
    //     {bike.map((bikeName) =>
    //       bikeName.company.toLocaleLowerCase() === bikeList ? (
    //         bikeName.bikes.map((item, index) => (
    //           <Card className="p-5 rounded-lg max-w-[360px] m-3" key={index}>
    //             <Image
    //               source={{
    //                 uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
    //               }}
    //               className="mb-6 h-[240px] w-full rounded-md aspect-[263/240]"
    //               alt="image"
    //             />
    //             <Text className="text-sm font-normal mb-2 text-typography-700">
    //               {item.manufacturer}
    //             </Text>
    //             <Heading size="md" className="mb-4">
    //               {item.name}
    //             </Heading>
    //             <Link href="https://gluestack.io/" isExternal>
    //               <HStack className="items-center">
    //                 <LinkText
    //                   size="sm"
    //                   className="font-semibold text-info-600 no-underline"
    //                 >
    //                   Search For Spare Parts
    //                 </LinkText>
    //                 <Icon
    //                   // as={ArrowRightIcon}
    //                   size="sm"
    //                   className="text-info-600 mt-0.5 ml-0.5"
    //                 />
    //               </HStack>
    //             </Link>
    //           </Card>
    //         ))
    //       ) : (
    //         <Text>No bike found</Text>
    //       )
    //     )}
    //   </VStack>
    // </ScrollView>

    <ScrollView>
      <VStack className="flex-1 p-6">
        <View className="flex-row flex-wrap justify-center">
          {bike.map((bikeName) =>
            bikeName.company.toLocaleLowerCase() === bikeList ? (
              bikeName.bikes.map((item, index) => (
                <View
                  key={index}
                  className="w-1/2 md:w-1/3 p-1"
                  style={{ maxWidth: 360 }}
                >
                  <Card className="p-5 rounded-lg">
                    <Image
                      source={{
                        uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
                      }}
                      className="mb-2 h-[100px] w-full rounded-md aspect-[263/240]"
                      alt="image"
                    />
                    <Text className="text-sm font-normal mb-1 text-typography-700">
                      {item.manufacturer}
                    </Text>
                    <Heading size="md" className="mb-1">
                      {item.name}
                    </Heading>
                    <Link href="https://gluestack.io/" isExternal>
                      <HStack className="items-center">
                        <LinkText
                          size="sm"
                          className="font-semibold text-info-600 no-underline"
                        >
                          Look For Parts
                        </LinkText>
                        <Icon
                          size="sm"
                          className="text-info-600 mt-0.5 ml-0.5"
                        />
                      </HStack>
                    </Link>
                  </Card>
                </View>
              ))
            ) : (
              <Text key="no-bike">No bike found</Text>
            )
          )}
        </View>
      </VStack>
    </ScrollView>
  );
};

export default BikeList;
