/* The working code */


// import React, { useState, useEffect } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView, TextInput, ActivityIndicator } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useCart } from "@/app/context/CartContext";

// const SpareParts = ({ subcategories, activeTab, setActiveTab }) => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true); // Single loading state
//   const { addToCart, addToWishlist } = useCart();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const querySnapshot = await getDocs(collection(db, "Product"));
//         const productsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       } finally {
//         setLoading(false); // Stop loading after data is fetched
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       subcategories.some(
//         (subcategory) =>
//           subcategory.name === activeTab &&
//           subcategory.spare_part.includes(product.id) &&
//           (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             product.spare_brand
//               .toLowerCase()
//               .includes(searchTerm.toLowerCase()))
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [products, activeTab, searchTerm, subcategories]);

//   // Show a single loading spinner for the entire screen
//   if (loading) {
//     return (
//       <Box className="flex items-center justify-center h-full">
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text className="text-lg mt-4">Loading products...</Text>
//       </Box>
//     );
//   }

//   return (
//     <Box className="pb-8 px-4 md:px-0">
//       {/* Tabs */}
//       <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
//         <Box className="py-5">
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <HStack space="lg" className="mx-0.5">
//               {subcategories.map((subcategory) => (
//                 <Pressable
//                   key={subcategory.name}
//                   className={`py-1 ${
//                     activeTab === subcategory.name ? "border-b-[3px]" : ""
//                   }`}
//                   onPress={() => setActiveTab(subcategory.name)}
//                 >
//                   <Text
//                     className={`${
//                       activeTab === subcategory.name
//                         ? "text-typography-900"
//                         : "text-typography-600"
//                     } font-medium`}
//                   >
//                     {subcategory.name}
//                   </Text>
//                 </Pressable>
//               ))}
//             </HStack>
//           </ScrollView>
//         </Box>
//       </Box>

//       {/* Search Input */}
//       <Box className="py-4">
//         <Text className="text-lg font-bold mb-2 text-typography-900">
//           Search Products
//         </Text>
//         <TextInput
//           style={{
//             borderWidth: 1,
//             borderColor: "#ddd",
//             padding: 10,
//             borderRadius: 5,
//             fontSize: 16,
//           }}
//           placeholder="Search for products or brands"
//           placeholderTextColor="#888"
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//         />
//       </Box>

//       {/* Products */}
//       <ScrollView>
//         <VStack className="flex-wrap flex-row justify-between">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => {
//               const isInStock = product.stock === "in stock";

//               return (
//                 <Card
//                   key={product.id}
//                   className="p-5 rounded-lg w-full md:w-[30%] m-1 flex flex-col justify-between"
//                 >
//                   <Image
//                     source={{ uri: product.image }}
//                     className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
//                     alt={`${product.title} image`}
//                   />
//                   <Text className="text-sm font-normal mb-2 text-typography-700">
//                     {product.title}
//                   </Text>
//                   <Text className="text-sm text-typography-500 mb-4">
//                     Brand: {product.spare_brand}
//                   </Text>
//                   <VStack className="mb-6">
//                     <Text
//                       size="md"
//                       className="mb-1 font-bold text-typography-900"
//                     >
//                       ₹{product.selling_price}
//                     </Text>
//                     <Text className="text-sm line-through text-gray-400">
//                       ₹{product.original_price}
//                     </Text>
//                     <Text
//                       className={`font-medium ${
//                         isInStock ? "text-green-500" : "text-red-500"
//                       }`}
//                     >
//                       {isInStock ? "In Stock" : "Out of Stock"}
//                     </Text>
//                   </VStack>
//                   <Box className="flex flex-row items-end mt-auto">
//                     <Button
//                       className={`px-4 py-2 mr-2 flex-1 ${
//                         isInStock ? "bg-[#007bff]" : "bg-[#ddd]"
//                       }`}
//                       onPress={() => isInStock && addToCart(product, activeTab)}
//                       disabled={!isInStock}
//                     >
//                       <Text
//                         size="sm"
//                         className={`text-white font-bold ${
//                           !isInStock ? "text-gray-500" : ""
//                         }`}
//                       >
//                         {isInStock ? "Add to Cart" : "Unavailable"}
//                       </Text>
//                     </Button>
//                     {!isInStock && (
//                       <Button
//                         variant="outline"
//                         className="px-4 py-2 border-outline-300 flex-1"
//                         onPress={() =>
//                           addToWishlist({
//                             id: product.id,
//                             title: product.title,
//                             price: product.selling_price,
//                             image: product.image,
//                           })
//                         }
//                       >
//                         <Text size="sm" className="text-typography-600">
//                           Wishlist
//                         </Text>
//                       </Button>
//                     )}
//                   </Box>
//                 </Card>
//               );
//             })
//           ) : (
//             <Text>No products found for your search.</Text>
//           )}
//         </VStack>
//       </ScrollView>
//     </Box>
//   );
// };

// export default SpareParts;




/* The Testing  code */




import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView, TextInput, ActivityIndicator } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "@/firebaseConfig";
import { useCart } from "@/app/context/CartContext";

// Helper function to chunk an array into smaller arrays of a given size
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const SpareParts = ({ subcategories, activeTab, setActiveTab }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, addToWishlist } = useCart();

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      console.log("Request sent at:", new Date().toISOString());
      setLoading(true);
      const startTime = Date.now(); // Start time for observation

      if (!activeTab) return;

      setLoading(true);
      try {
        // Find the active subcategory
        const activeSubcategory = subcategories.find(
          (subcategory) => subcategory.name === activeTab
        );

        if (!activeSubcategory) {
          setProducts([]);
          return;
        }

        const productIds = activeSubcategory.spare_part;

        if (productIds.length > 0) {
          const productChunks = chunkArray(productIds, 30);
          const productPromises = productChunks.map((chunk) =>
            getDocs(
              query(collection(db, "Product"), where("__name__", "in", chunk))
            )
          );

          const querySnapshots = await Promise.all(productPromises);
          const productsData = querySnapshots.flatMap((snapshot) =>
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );

          setProducts(productsData);
          console.log(
            "Response received at:",
            new Date().toISOString(),
            "Time taken:",
            Date.now() - startTime,
            "ms"
          );
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [activeTab, subcategories]);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.spare_brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  if (loading) {
    return (
      <Box className="flex items-center justify-center h-full">
        <ActivityIndicator size="large" color="#007bff" />
        <Text className="text-lg mt-4">Loading products...</Text>
      </Box>
    );
  }

  return (
    <Box className="pb-8 px-4 md:px-0">
      {/* Tabs */}
      <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
        <Box className="py-5">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space="lg" className="mx-0.5">
              {subcategories.map((subcategory) => (
                <Pressable
                  key={subcategory.name}
                  className={`py-1 ${
                    activeTab === subcategory.name ? "border-b-[3px]" : ""
                  }`}
                  onPress={() => setActiveTab(subcategory.name)}
                >
                  <Text
                    className={`${
                      activeTab === subcategory.name
                        ? "text-typography-900"
                        : "text-typography-600"
                    } font-medium`}
                  >
                    {subcategory.name}
                  </Text>
                </Pressable>
              ))}
            </HStack>
          </ScrollView>
        </Box>
      </Box>

      {/* Search Input */}
      <Box className="py-4">
        <Text className="text-lg font-bold mb-2 text-typography-900">
          Search Products
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 10,
            borderRadius: 5,
            fontSize: 16,
          }}
          placeholder="Search for products or brands"
          placeholderTextColor="#888"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </Box>

      {/* Products */}
      <ScrollView>
        <VStack className="flex-wrap flex-row justify-between">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isInStock = product.stock === "in stock";

              return (
                <Card
                  key={product.id}
                  className="p-5 rounded-lg w-full md:w-[30%] m-1 flex flex-col justify-between"
                >
                  <Image
                    source={{ uri: product.image }}
                    
                    className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
                    alt={`${product.title} image`}
                  />
                  <Text className="text-sm font-normal mb-2 text-typography-700">
                    {product.title}
                  </Text>
                  <Text className="text-sm text-typography-500 mb-4">
                    Brand: {product.spare_brand}
                  </Text>
                  <VStack className="mb-6">
                    <Text
                      size="md"
                      className="mb-1 font-bold text-typography-900"
                    >
                      ₹{product.selling_price}
                    </Text>
                    <Text className="text-sm line-through text-gray-400">
                      ₹{product.original_price}
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
                      onPress={() => isInStock && addToCart(product, activeTab)}
                      disabled={!isInStock}
                    >
                      <Text
                        size="sm"
                        className={`text-white font-bold ${
                          !isInStock ? "text-gray-500" : ""
                        }`}
                      >
                        {isInStock ? "Add to Cart" : "Unavailable"}
                      </Text>
                    </Button>
                    {!isInStock && (
                      <Button
                        variant="outline"
                        className="px-4 py-2 border-outline-300 flex-1"
                        onPress={() =>
                          addToWishlist({
                            id: product.id,
                            title: product.title,
                            price: product.selling_price,
                            image: product.image,
                          })
                        }
                      >
                        <Text size="sm" className="text-typography-600">
                          Wishlist
                        </Text>
                      </Button>
                    )}
                  </Box>
                </Card>
              );
            })
          ) : (
            <Text>No products found for your search.</Text>
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default SpareParts;
