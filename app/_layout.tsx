import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(bike)" options={{ title: "Bike List" }} />
        <Stack.Screen
          name="modal"
          options={{
            title: "Profile",
            presentation: "modal",
          }}
        />
        <Stack.Screen name="CompanyName" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GluestackUIProvider>
  );
}
