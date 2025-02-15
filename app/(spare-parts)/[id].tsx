import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Button, ButtonText } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";

const ProductDetails = () => {
  const { id } = useLocalSearchParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "Product", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Product not found!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Product not found</Text>
      </View>
    );
  }

   const renderStars = (rating) => {
     const fullStars = "⭐".repeat(Math.floor(rating));
     const emptyStars = "☆".repeat(5 - Math.floor(rating));
     return `${fullStars}${emptyStars}`;
   };

  return (
    <ScrollView className="p-5 bg-white">
      {/* Product Image */}
      <Image
        source={{
          uri: product.image
            ? `https://www.aadibikes.com/images/${product.image}`
            : "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png",
        }}
        className="w-full h-64 rounded-lg mb-5"
      />

      {/* Product Title */}
      <Text className="text-2xl font-bold text-gray-900">{product.title}</Text>

      {/* Brand */}
      <Text className="text-lg text-gray-600 mt-2">
        Brand: {product.spare_brand}
      </Text>

      {product.rating !== undefined && (
        <View className="flex-row items-center mt-2">
          <Text className="text-lg font-semibold text-gray-900">
            {renderStars(product.rating)}
          </Text>
          <Text className="text-md text-gray-600 ml-2">
            ({product.rating.toFixed(1)}) {/* Display decimal rating */}
          </Text>
        </View>
      )}

      {/* Price */}
      <View className="flex-row items-center mt-3">
        <Text className="text-2xl font-bold text-green-600">
          ₹{product.selling_price}
        </Text>
        <Text className="text-sm line-through text-gray-400 ml-2">
          ₹{product.original_price}
        </Text>
      </View>

      {/* Stock Status */}
      <Text
        className={`mt-2 text-lg font-medium ${
          product.stock === "in stock" ? "text-green-500" : "text-red-500"
        }`}
      >
        {product.stock === "in stock" ? "In Stock" : "Out of Stock"}
      </Text>

      {/* Description Section */}
      {product.description && (
        <View className="mt-4 p-4 bg-gray-100 rounded-lg">
          <Text className="text-lg font-semibold text-gray-900">
            Description
          </Text>
          <Text className="text-md text-gray-700 mt-2 leading-relaxed">
            {product.description}
          </Text>
        </View>
      )}

      {/* Add to Cart Button */}
      <Button
        className={`mt-6 rounded ${
          product.stock === "in stock" ? "bg-blue-600" : "bg-gray-400"
        }`}
        onPress={() => addToCart(product)}
        disabled={product.stock !== "in stock"}
      >
        <ButtonText>
          {product.stock === "in stock" ? "Add to Cart" : "Unavailable"}
        </ButtonText>
      </Button>
    </ScrollView>
  );
};

export default ProductDetails;
