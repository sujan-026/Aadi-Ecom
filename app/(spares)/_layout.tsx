import { Stack } from "expo-router";

export default function SparesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Products", // Set header title to "Products"
        headerStyle: {
          backgroundColor: "#fff", // Optional: Customize header background
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
          color: "#000", // Optional: Customize header title color
        },
      }}
    >
      <Stack.Screen name="[item]" />
    </Stack>
  );
}
