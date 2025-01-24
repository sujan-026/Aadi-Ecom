import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { CartProvider } from "@/app/context/CartContext";
export default function RootLayout() {
  return (
    <CartProvider>
      <GluestackUIProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(bike)" options={{ title: "Bike List" }} />
          <Stack.Screen name="(spares)" options={{ headerShown: false }} />
          <Stack.Screen name="checkout" options={{ title: "Billing" }} />
          <Stack.Screen
            name="(product)"
            options={{ title: "Bike Spare Part List" }}
          />
          <Stack.Screen
            name="modal"
            options={{
              title: "Profile",
              presentation: "modal",
            }}
          />
          <Stack.Screen name="CompanyName" options={{ title: "Bike Models" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GluestackUIProvider>
    </CartProvider>
  );
}
