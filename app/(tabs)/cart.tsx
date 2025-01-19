// import React from "react";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Box } from "@/components/ui/box";
// import { ScrollView } from "react-native";
// import { useCart } from "@/app/context/CartContext"; // Import Cart Context
// import { Trash, Plus, Minus } from "lucide-react-native"; // Import Trash Icon

// export default function CartScreen() {
//   const { cart, removeFromCart, updateCartQuantity } = useCart();

//   const calculateTotal = () => {
//     return cart
//       .reduce(
//         (sum, item) => sum + parseFloat(item.price.replace(/,/g, '')),
//         0
//       )
//       .toFixed(2);
//   };

//   return (
//     <ScrollView className="bg-background-100">
//       <VStack space="lg" className="p-5 bg-white rounded-lg shadow-md">
//         <Text className="text-2xl font-bold mb-4 text-typography-900">
//           Your Cart
//         </Text>
//         {cart.length > 0 ? (
//           <>
//             {cart.map((item, index) => (
//               <HStack
//                 key={index}
//                 className="justify-between items-center p-4 border-b border-outline-200"
//               >
//                 <Box className="flex-1">
//                   <Text className="text-md font-semibold text-typography-900">
//                     {item.title}
//                   </Text>
//                   <Text className="text-sm text-typography-600">
//                     ₹{item.price}
//                   </Text>
//                 </Box>
//                 <HStack space="sm" className="items-center">
//                   <Button
//                     className="p-2 bg-gray-200 rounded-full"
//                     onPress={() =>
//                       updateCartQuantity(item.id, item.quantity - 1)
//                     }
//                     disabled={item.quantity <= 1}
//                   >
//                     <Minus
//                       size={18}
//                       color={item.quantity > 1 ? "#000" : "#CCC"}
//                     />
//                   </Button>
//                   <Text className="text-lg font-semibold text-typography-900 mx-2">
//                     {item.quantity}
//                   </Text>
//                   <Button
//                     className="p-2 bg-gray-200 rounded-full"
//                     onPress={() =>
//                       updateCartQuantity(item.id, item.quantity + 1)
//                     }
//                   >
//                     <Plus size={18} color="#000" />
//                   </Button>
//                   <Button
//                     variant="outline"
//                     action="negative"
//                     className="border-none p-2"
//                     onPress={() => removeFromCart(item.id)}
//                   >
//                     <Trash size={20} color="#FF0000" />
//                   </Button>
//                 </HStack>
//               </HStack>
//             ))}
//             <HStack className="justify-between pt-5 mt-5 border-t border-outline-200">
//               <Text className="text-lg font-semibold text-typography-900">
//                 Total Products:
//               </Text>
//               <Text className="text-lg font-semibold text-typography-900">
//                 {cart.length}
//               </Text>
//             </HStack>
//             <HStack className="justify-between pt-2">
//               <Text className="text-lg font-semibold text-typography-900">
//                 Total Price:
//               </Text>
//               <Text className="text-lg font-semibold text-typography-900">
//                 ₹{calculateTotal()}
//               </Text>
//             </HStack>
//             <Button
//               className="mt-5 bg-primary-500 text-white py-2 rounded-md shadow-md"
//               onPress={() => alert("Proceeding to Checkout")}
//             >
//               <ButtonText className="text-lg font-semibold">
//                 Proceed to Checkout
//               </ButtonText>
//             </Button>
//           </>
//         ) : (
//           <Text className="text-md text-center text-typography-600">
//             Your cart is empty
//           </Text>
//         )}
//       </VStack>
//     </ScrollView>
//   );
// }







import React from "react";
import { useRouter } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";
import { useCart } from "@/app/context/CartContext"; // Import Cart Context
import { Trash, Plus, Minus } from "lucide-react-native"; // Import Trash Icon

export default function CartScreen() {
  const { cart, removeFromCart, updateCartQuantity } = useCart();
  const router = useRouter();
  // Calculate total price of all items in the cart
  const calculateTotal = () => {
    return cart
      .reduce(
        (sum, item) =>
          sum + item.quantity * parseFloat(item.price.replace(/,/g, "")),
        0
      )
      .toFixed(2);
  };

  return (
    <ScrollView className="bg-background-100">
      <VStack space="lg" className="p-5 bg-white rounded-lg shadow-md">
        <Text className="text-2xl font-bold mb-4 text-typography-900">
          Your Cart
        </Text>
        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <HStack
                key={index}
                className="justify-between items-center p-4 border-b border-outline-200"
              >
                <Box className="flex-1">
                  <Text className="text-md font-semibold text-typography-900">
                    {item.title}
                  </Text>
                  <Text className="text-sm text-typography-600">
                    ₹{item.price}
                  </Text>
                </Box>
                <HStack space="sm" className="items-center">
                  <Button
                    className="p-2 bg-gray-200 rounded-full"
                    onPress={() =>
                      updateCartQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <Minus
                      size={18}
                      color={item.quantity > 1 ? "#000" : "#CCC"}
                    />
                  </Button>
                  <Text className="text-lg font-semibold text-typography-900 mx-2">
                    {item.quantity}
                  </Text>
                  <Button
                    className="p-2 bg-gray-200 rounded-full"
                    onPress={() =>
                      updateCartQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <Plus size={18} color="#000" />
                  </Button>
                  <Button
                    variant="outline"
                    action="negative"
                    className="border-none p-2"
                    onPress={() => removeFromCart(item.id)}
                  >
                    <Trash size={20} color="#FF0000" />
                  </Button>
                </HStack>
              </HStack>
            ))}
            <HStack className="justify-between pt-5 mt-5 border-t border-outline-200">
              <Text className="text-lg font-semibold text-typography-900">
                Total Products:
              </Text>
              <Text className="text-lg font-semibold text-typography-900">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </Text>
            </HStack>
            <HStack className="justify-between pt-2">
              <Text className="text-lg font-semibold text-typography-900">
                Total Price:
              </Text>
              <Text className="text-lg font-semibold text-typography-900">
                ₹{calculateTotal()}
              </Text>
            </HStack>
            <Button
              className="mt-5 bg-primary-500 text-white py-2 rounded-md shadow-md"
              onPress={() => router.push("/checkout")}
            >
              <ButtonText className="text-lg font-semibold">
                Proceed to Checkout
              </ButtonText>
            </Button>
          </>
        ) : (
          <Text className="text-md text-center text-typography-600">
            Your cart is empty
          </Text>
        )}
      </VStack>
    </ScrollView>
  );
}
