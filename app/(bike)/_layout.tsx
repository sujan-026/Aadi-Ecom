import { Stack } from "expo-router";

export default function BikeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[bikeList]" />
    </Stack>
  );
}
