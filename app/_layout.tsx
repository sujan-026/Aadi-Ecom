import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext"; 
import { useEffect, useState } from "react";
import { useRouter, useNavigationContainerRef } from "expo-router";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    const unsubscribe = navigationRef?.addListener("state", () => {
      setIsReady(true);
    });
    return unsubscribe;
  }, []);
  
  return (
    <AuthProvider>
      <CartProvider>
        <GluestackUIProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(spares)" options={{ headerShown: false }} />
            <Stack.Screen name="(spare-parts)" options={{ title: "Product" }} />
            <Stack.Screen
              name="(product)"
              options={{ title: "Bike Spare Part List" }}
            />
            <Stack.Screen name="checkout" options={{ title: "Billing" }} />
            <Stack.Screen
              name="modal"
              options={{
                title: "Profile",
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="CompanyName"
              options={{ title: "Bike Models" }}
            />
            <Stack.Screen name="login" options={{ title: "Login Page" }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </GluestackUIProvider>
      </CartProvider>
    </AuthProvider>
  );
}
