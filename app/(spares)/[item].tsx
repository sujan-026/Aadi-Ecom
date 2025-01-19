// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import { useCart } from "@/app/context/CartContext";
// import spares from "@/assets/spares.json";

// const ItemPage = () => {
//   const { item } = useLocalSearchParams(); // Get the category from the URL
//   const { addToCart } = useCart(); // Import addToCart from CartContext

//   // Find the data for the selected category
//   const categoryData = spares.find((spare) => spare.name === item)?.data || [];

//   const handleAddToCart = (product) => {
//     addToCart(product, item); // Use the category name as the tabName
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.src }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Text style={styles.price}>₹{item.price}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>
//           handleAddToCart({
//             id: item.id.toString(),
//             title: item.title,
//             price: item.price,
//           })
//         }
//       >
//         <Text style={styles.buttonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{item} Items</Text>
//       <FlatList
//         data={categoryData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     elevation: 2,
//   },
//   image: {
//     width: "100%",
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   description: {
//     fontSize: 14,
//     color: "#555",
//     marginVertical: 5,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

// export default ItemPage;




import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useCart } from "@/app/context/CartContext";
import spares from "@/assets/spares.json";

const ItemPage = () => {
    const { item } = useLocalSearchParams(); // Get the category from the URL
    const { addToCart } = useCart(); // Import addToCart from CartContext

    // Find the data for the selected category
    const categoryData = spares.find((spare) => spare.name === item)?.data || [];

    const handleAddToCart = (product) => {
        addToCart(product, item); // Use the category name as the tabName
    };

    const renderItem = ({ item }) => {
        const originalPrice = parseFloat(item.price) + 500; // Example: Adding ₹500 as the original price
        const savings = originalPrice - parseFloat(item.price);
        const isInStock = item.rating !== null; // Assuming `rating` is used as a stock indicator for now

        return (
            <View style={styles.card}>
                {/* Image */}
                <Image source={{ uri: item.src }} style={styles.image} />

                {/* Savings */}
                {savings > 0 && (
                    <View style={styles.savingsTag}>
                        <Text style={styles.savingsText}>Saves ₹{savings.toFixed(0)}</Text>
                    </View>
                )}

                {/* Title and Description */}
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>

                {/* Price and Stock Info */}
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style={[styles.stock, !isInStock && styles.outOfStock]}>
                    {isInStock ? "In Stock" : "Out of Stock"}
                </Text>

                {/* Add to Cart Button */}
                <TouchableOpacity
                    style={[styles.button, isInStock ? null : styles.disabledButton]}
                    onPress={() =>
                        isInStock &&
                        handleAddToCart({
                            id: item.id.toString(),
                            title: item.title,
                            price: item.price,
                        })
                    }
                    disabled={!isInStock}
                >
                    <Text style={styles.buttonText}>
                        {isInStock ? "Add to Cart" : "Unavailable"}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{item} Items</Text>
            <FlatList
                data={categoryData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        elevation: 2,
        position: "relative",
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: "contain",
    },
    savingsTag: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "#FF5722",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    savingsText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    stock: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4CAF50",
        marginBottom: 10,
    },
    outOfStock: {
        color: "red",
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    disabledButton: {
        backgroundColor: "#ddd",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default ItemPage;
