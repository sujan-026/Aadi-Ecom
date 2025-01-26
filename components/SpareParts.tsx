// import React, { useState } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView } from "react-native";
// import { useCart } from "@/app/context/CartContext";

// const tabs = [
//   { title: "Brake&Clutch" },
//   { title: "Sets" },
//   { title: "Shock Absorber" },
//   { title: "Fuel Pump Motor" },
//   { title: "CDI" },
//   { title: "Speedometer" },
// ];

// const SpareParts = ({ spares }) => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <Box className="pb-8 px-4 md:px-0">
//       <SparePartsInfoTabs
//         tabs={tabs}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <ScrollView>
//         <SparesPanelData activeTab={activeTab} spares={spares} />
//       </ScrollView>
//     </Box>
//   );
// };

// const SparePartsInfoTabs = ({ tabs, activeTab, setActiveTab }: any) => {
//   return (
//     <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
//       <Box className="py-5">
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <HStack space="lg" className="mx-0.5">
//             {tabs.map((tab: any) => (
//               <Pressable
//                 key={tab.title}
//                 className={`py-1 ${activeTab === tab ? "border-b-[3px]" : ""}`}
//                 onPress={() => setActiveTab(tab)}
//               >
//                 <Text
//                   className={`${
//                     activeTab === tab
//                       ? "text-typography-900"
//                       : "text-typography-600"
//                   } font-medium`}
//                 >
//                   {tab.title}
//                 </Text>
//               </Pressable>
//             ))}
//           </HStack>
//         </ScrollView>
//       </Box>
//     </Box>
//   );
// };

// const SparesPanelData = ({ activeTab, spares }: any) => {
//   const { addToCart } = useCart();

//   return (
//     <VStack className="flex-wrap flex-row justify-between">
//       {spares.map((spare: { name: string; data: any[] }) =>
//         spare.name === activeTab.title
//           ? spare.data.map((item, index) => {
//               const originalPrice = parseFloat(item.price) + 500; // Add ₹500 to simulate original price
//               const savings = originalPrice - parseFloat(item.price);
//               const isInStock = item.rating !== null;

//               return (
//                 <Card
//                   key={index}
//                   className="p-5 rounded-lg w-full md:w-[30%] m-1 flex flex-col justify-between"
//                 >
//                   <Image
//                     source={{ uri: item.src }}
//                     className="mb-6 h-[200px] w-full rounded-md aspect-[5/3]"
//                     alt={`${item.title} image`}
//                   />
//                   {savings > 0 && (
//                     <Box className="absolute top-2 left-2 bg-[#FF5722] px-2 py-1 rounded-md">
//                       <Text className="text-white text-xs font-bold">
//                         Saves ₹{savings.toFixed(0)}
//                       </Text>
//                     </Box>
//                   )}
//                   <Text className="text-sm font-normal mb-2 text-typography-700">
//                     {item.title}
//                   </Text>
//                   <Text className="text-sm text-typography-500 mb-4">
//                     {item.description}
//                   </Text>
//                   <VStack className="mb-6">
//                     <Text
//                       size="md"
//                       className="mb-1 font-bold text-typography-900"
//                     >
//                       ₹{item.price}
//                     </Text>
                    // <Text
                    //   className={`font-medium ${
                    //     isInStock ? "text-green-500" : "text-red-500"
                    //   }`}
                    // >
                    //   {isInStock ? "In Stock" : "Out of Stock"}
                    // </Text>
//                   </VStack>
//                   <Box className="flex flex-row items-end mt-auto">
                    // <Button
                    //   className={`px-4 py-2 mr-2 flex-1 ${
                    //     isInStock ? "bg-[#007bff]" : "bg-[#ddd]"
                    //   }`}
                    //   onPress={() =>
                    //     isInStock && addToCart(item, activeTab.title)
                    //   }
                    //   disabled={!isInStock}
                    // >
                    //   <ButtonText size="sm" className="text-white font-bold">
                    //     {isInStock ? "Add to Cart" : "Unavailable"}
                    //   </ButtonText>
                    // </Button>
                    // <Button
                    //   variant="outline"
                    //   className="px-4 py-2 border-outline-300 flex-1"
                    // >
                    //   <ButtonText size="sm" className="text-typography-600">
                    //     Wishlist
                    //   </ButtonText>
                    // </Button>
//                   </Box>
//                 </Card>
//               );
//             })
//           : null
//       )}
//     </VStack>
//   );
// };

// export default SpareParts;








// import React, { useState, useEffect } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView, TextInput } from "react-native";
// import { collection, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useCart } from "@/app/context/CartContext";

// const SpareParts = ({ subcategories, activeTab, setActiveTab }) => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const { addToCart, addToWishlist } = useCart();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Product"));
//         const productsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     // Filter products based on the active tab and search term
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















// import React, { useState, useEffect, useMemo } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView, TextInput, ActivityIndicator } from "react-native"; // Fallback Spinner
// import { collection, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useCart } from "@/app/context/CartContext";

// const SpareParts = ({ subcategories, activeTab, setActiveTab }) => {
//   const [products, setProducts] = useState([]);
//   const [localSubcategories, setLocalSubcategories] = useState([]); // Use local state
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { addToCart, addToWishlist } = useCart();

//   // Fetch subcategories and products in parallel
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [subcategorySnapshot, productSnapshot] = await Promise.all([
//           getDocs(collection(db, "Subcategory")),
//           getDocs(collection(db, "Product")),
//         ]);

//         const subcategoriesData = subcategorySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         const productsData = productSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setLocalSubcategories(subcategoriesData); // Use local state for subcategories
//         setProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Memoize filtered products for performance
//   const filteredProducts = useMemo(() => {
//     return products.filter(
//       (product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.spare_brand.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [products, searchTerm]);

//   // Show loading spinner if data is still loading
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
//               {localSubcategories.map((subcategory) => (
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







// import React, { useState, useEffect, useMemo } from "react";
// import { Box } from "@/components/ui/box";
// import { VStack } from "@/components/ui/vstack";
// import { HStack } from "@/components/ui/hstack";
// import { Image } from "@/components/ui/image";
// import { Pressable } from "@/components/ui/pressable";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollView, TextInput, ActivityIndicator } from "react-native"; // Use ActivityIndicator for loading
// import { collection, query, where, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import { useCart } from "@/app/context/CartContext";

// const SpareParts = ({ subcategories, activeTab, setActiveTab }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true); // Track data loading state
//   const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
//   const { addToCart, addToWishlist } = useCart();

//   // Fetch products based on the active tab
//   useEffect(() => {
//     const fetchProductsForTab = async () => {
//       if (!activeTab) return;

//       setLoading(true);
//       try {
//         const activeSubcategory = subcategories.find(
//           (subcategory) => subcategory.name === activeTab
//         );

//         if (!activeSubcategory) {
//           setProducts([]);
//           return;
//         }

//         // Fetch only the products associated with the active subcategory
//         const querySnapshot = await getDocs(
//           query(
//             collection(db, "Product"),
//             where("id", "in", activeSubcategory.spare_part.slice(0, 10)) // Limit fetch for performance
//           )
//         );

//         const productsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductsForTab();
//   }, [activeTab, subcategories]);

//   // Memoize filtered products for performance
//   useEffect(() => {
//     const filtered = products.filter((product) => {
//       return (
//         product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.spare_brand.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });

//     setFilteredProducts(filtered);
//   }, [products, searchTerm]);

//   // Show loading spinner while data is being fetched
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






import React, { useState, useEffect, useMemo } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView, TextInput, ActivityIndicator } from "react-native"; // Use ActivityIndicator for loading
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "@/firebaseConfig";
import { useCart } from "@/app/context/CartContext";

const SpareParts = ({ subcategories, activeTab, setActiveTab }) => {
  const [products, setProducts] = useState([]);
  const [loadingTabs, setLoadingTabs] = useState(true); // Loading state for tabs
  const [loadingProducts, setLoadingProducts] = useState(false); // Loading state for products
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const { addToCart, addToWishlist } = useCart();

  // Fetch subcategories (tabs) on mount
  useEffect(() => {
    const fetchSubcategories = async () => {
      setLoadingTabs(true);
      try {
        const subcategoriesSnapshot = await getDocs(
          collection(db, "Subcategory")
        );
        const subcategoriesData = subcategoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        subcategories.splice(0, subcategories.length, ...subcategoriesData); // Update subcategories array
        if (subcategoriesData.length > 0) {
          setActiveTab(subcategoriesData[0].name); // Set the first tab as active
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoadingTabs(false);
      }
    };

    fetchSubcategories();
  }, []);

  // Fetch products based on the active tab
  useEffect(() => {
    const fetchProductsForTab = async () => {
      if (!activeTab) return;

      setLoadingProducts(true);
      try {
        const activeSubcategory = subcategories.find(
          (subcategory) => subcategory.name === activeTab
        );

        if (!activeSubcategory) {
          setProducts([]);
          return;
        }

        // Fetch all products associated with the active subcategory
        const querySnapshot = await getDocs(
          query(
            collection(db, "Product"),
            where("id", "in", activeSubcategory.spare_part)
          )
        );

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProductsForTab();
  }, [activeTab, subcategories]);

  // Memoize filtered products for performance
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.spare_brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <Box className="pb-8 px-4 md:px-0">
      {/* Tabs Loading */}
      {loadingTabs ? (
        <Box className="flex items-center justify-center h-full">
          <ActivityIndicator size="large" color="#007bff" />
          <Text className="text-lg mt-4">Loading categories...</Text>
        </Box>
      ) : (
        <>
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

          {/* Products Loading */}
          {loadingProducts ? (
            <Box className="flex items-center justify-center h-full">
              <ActivityIndicator size="large" color="#007bff" />
              <Text className="text-lg mt-4">Loading products...</Text>
            </Box>
          ) : (
            <>
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
                              onPress={() =>
                                isInStock && addToCart(product, activeTab)
                              }
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
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default SpareParts;
