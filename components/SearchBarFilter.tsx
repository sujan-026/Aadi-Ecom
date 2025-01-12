import React from "react";
import { HStack } from "./ui/hstack";
import { Icon, SearchIcon } from "./ui/icon";
import { Pressable } from "./ui/pressable";
import { Text } from "./ui/text";
import { Link } from "expo-router";

const SearchBarFilter = () => {
  const [selectedTab, setSelectedTab] = React.useState("Anywhere");
  return (
    <HStack className="h-20 items-center justify-between">
      <HStack className="rounded-full p-1.5 items-center border border-outline-200">
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "All Parts" ? "bg-background-100" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("All Parts")}
        >
          <Link href="/products" asChild>
            <Pressable>
              <Text size="sm" className="font-medium">
                All Parts
              </Text>
            </Pressable>
          </Link>
        </Pressable>
        <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Popular Models"
              ? "bg-background-100"
              : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Popular Models")}
        >
          <Link href="/CompanyName" asChild>
            <Pressable>
              <Text size="sm" className="font-medium">
                Popular Models
              </Text>
            </Pressable>
          </Link>
        </Pressable>
        {/* <Pressable
          className={`rounded-full px-3 py-1.5 ${
            selectedTab === "Add Filters"
              ? "bg-background-100"
              : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("Add Filters")}
        >
          <Text size="sm" className="font-medium">
            Add Filters
          </Text>
        </Pressable> */}
        <Pressable className="ml-3 p-2 bg-primary-500 rounded-full">
          <Icon as={SearchIcon} className="w-4 h-4 text-typography-0" />
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default SearchBarFilter;
