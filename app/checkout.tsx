// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { useCart } from "@/app/context/CartContext";

// const CheckoutScreen = () => {
//   const { cart } = useCart();
//   const [contact, setContact] = useState("");
//   const [address, setAddress] = useState({
//     country: "India",
//     firstName: "",
//     lastName: "",
//     flat: "",
//     area: "",
//     city: "",
//     state: "",
//     pin: "",
//     phone: "",
//   });
//   const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
//   const [paymentMethod, setPaymentMethod] = useState("razorpay");

//   const calculateTotal = () =>
//     cart
//       .reduce(
//         (sum, item) =>
//           sum + item.quantity * parseFloat(item.price.replace(/,/g, "")),
//         0
//       )
//       .toFixed(2);

//   const handlePlaceOrder = () => {
//     alert("Order Placed!");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Contact Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Contact</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email or mobile phone number"
//           value={contact}
//           onChangeText={setContact}
//         />
//         <View style={styles.row}>
//           <Text>Send me news and offers</Text>
//           <TextInput style={styles.checkbox} type="checkbox" />
//         </View>
//       </View>

//       {/* Delivery Section */}
    //   <View style={styles.section}>
    //     <Text style={styles.sectionTitle}>Delivery</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="First name"
    //       value={address.firstName}
    //       onChangeText={(text) => setAddress({ ...address, firstName: text })}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Last name"
    //       value={address.lastName}
    //       onChangeText={(text) => setAddress({ ...address, lastName: text })}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Flat no., House no., etc."
    //       value={address.flat}
    //       onChangeText={(text) => setAddress({ ...address, flat: text })}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Area, Colony, Village, Landmark"
    //       value={address.area}
    //       onChangeText={(text) => setAddress({ ...address, area: text })}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder="City, Town, Village"
    //       value={address.city}
    //       onChangeText={(text) => setAddress({ ...address, city: text })}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder="PIN code"
    //       value={address.pin}
    //       onChangeText={(text) => setAddress({ ...address, pin: text })}
    //     />
    //   </View>

//       {/* Payment Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Payment</Text>
//         <TouchableOpacity
//           style={[
//             styles.paymentOption,
//             paymentMethod === "razorpay" && styles.activeOption,
//           ]}
//           onPress={() => setPaymentMethod("razorpay")}
//         >
//           <Text>Razorpay 5% Extra Discount</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.paymentOption,
//             paymentMethod === "cod" && styles.activeOption,
//           ]}
//           onPress={() => setPaymentMethod("cod")}
//         >
//           <Text>Cash on Delivery (COD)</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Billing Address Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Billing Address</Text>
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => setBillingSameAsShipping(true)}
//         >
//           <Text>Same as shipping address</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => setBillingSameAsShipping(false)}
//         >
//           <Text>Use a different billing address</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Order Summary */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Order Summary</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Discount code or gift card"
//         />
//         <View style={styles.row}>
//           <Text>Total Items:</Text>
//           <Text>{cart.length}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text>Total Price:</Text>
//           <Text>₹{calculateTotal()}</Text>
//         </View>
//       </View>

//       {/* Place Order */}
//       <TouchableOpacity
//         style={styles.placeOrderButton}
//         onPress={handlePlaceOrder}
//       >
//         <Text style={styles.placeOrderButtonText}>Place Order</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     padding: 10,
//   },
//   section: {
//     backgroundColor: "#fff",
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 5,
//     elevation: 1,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 3,
//     backgroundColor: "#fff",
//   },
//   paymentOption: {
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   activeOption: {
//     borderColor: "#007bff",
//     backgroundColor: "#f0f8ff",
//   },
//   placeOrderButton: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   placeOrderButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default CheckoutScreen;


















// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { useForm, Controller } from "react-hook-form"; // Import react-hook-form
// import { useCart } from "@/app/context/CartContext";

// const CheckoutScreen = () => {
//   const { cart } = useCart();

//   const {
//     control,
//     handleSubmit,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       contact: "",
//       address: {
//         country: "India",
//         firstName: "",
//         lastName: "",
//         flat: "",
//         area: "",
//         city: "",
//         state: "",
//         pin: "",
//         phone: "",
//       },
//       paymentMethod: "razorpay",
//     },
//   });

//   const calculateTotal = () =>
//     cart
//       .reduce(
//         (sum, item) =>
//           sum + item.quantity * parseFloat(item.price.replace(/,/g, "")),
//         0
//       )
//       .toFixed(2);

//   const handlePlaceOrder = (data) => {
//     console.log("Order Data:", data);
//     alert("Order Placed!");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Contact Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Contact</Text>
//         <Controller
//           name="contact"
//           control={control}
//           rules={{
//             required: "Contact information is required",
//           }}
//           render={({ field: { onChange, value } }) => (
//             <TextInput
//               style={[styles.input, errors.contact && { borderColor: "red" }]}
//               placeholder="Email or mobile phone number"
//               value={value}
//               onChangeText={onChange}
//             />
//           )}
//         />
//         {errors.contact && (
//           <Text style={styles.errorText}>{errors.contact.message}</Text>
//         )}
//       </View>

//       {/* Delivery Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Delivery</Text>
//         <Controller
//           name="address.firstName"
//           control={control}
//           rules={{ required: "First name is required" }}
//           render={({ field: { onChange, value } }) => (
//             <TextInput
//               style={[
//                 styles.input,
//                 errors.address?.firstName && { borderColor: "red" },
//               ]}
//               placeholder="First name"
//               value={value}
//               onChangeText={onChange}
//             />
//           )}
//         />
//         {errors.address?.firstName && (
//           <Text style={styles.errorText}>
//             {errors.address.firstName.message}
//           </Text>
//         )}

//         <Controller
//           name="address.pin"
//           control={control}
//           rules={{
//             required: "PIN code is required",
//             pattern: {
//               value: /^[0-9]{6}$/,
//               message: "Invalid PIN code",
//             },
//           }}
//           render={({ field: { onChange, value } }) => (
//             <TextInput
//               style={[
//                 styles.input,
//                 errors.address?.pin && { borderColor: "red" },
//               ]}
//               placeholder="PIN code"
//               value={value}
//               onChangeText={onChange}
//               keyboardType="numeric"
//             />
//           )}
//         />
//         {errors.address?.pin && (
//           <Text style={styles.errorText}>{errors.address.pin.message}</Text>
//         )}
//       </View>

//       {/* Payment Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Payment</Text>
//         <TouchableOpacity
//           style={[
//             styles.paymentOption,
//             getValues("paymentMethod") === "razorpay" && styles.activeOption,
//           ]}
//           onPress={() => setValue("paymentMethod", "razorpay")}
//         >
//           <Text>Razorpay 5% Extra Discount</Text>
//         </TouchableOpacity>
//         {/* Cash on Delivery Payment Option */}
//         <TouchableOpacity
//           style={[
//             styles.paymentOption,
//             getValues("paymentMethod") === "cod" && styles.activeOption,
//           ]}
//           onPress={() => setValue("paymentMethod", "cod")}
//         >
//           <Text>Cash on Delivery (COD)</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Order Summary */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Order Summary</Text>
//         <View style={styles.row}>
//           <Text>Total Items:</Text>
//           <Text>{cart.length}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text>Total Price:</Text>
//           <Text>₹{calculateTotal()}</Text>
//         </View>
//       </View>

//       {/* Place Order */}
//       <TouchableOpacity
//         style={styles.placeOrderButton}
//         onPress={handleSubmit(handlePlaceOrder)}
//       >
//         <Text style={styles.placeOrderButtonText}>Place Order</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     padding: 10,
//   },
//   section: {
//     backgroundColor: "#fff",
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 5,
//     elevation: 1,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   paymentOption: {
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   activeOption: {
//     borderColor: "#007bff",
//     backgroundColor: "#f0f8ff",
//   },
//   placeOrderButton: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   placeOrderButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginTop: -8,
//     marginBottom: 8,
//   },
// });

// export default CheckoutScreen;









import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form"; // Import react-hook-form
import { useCart } from "@/app/context/CartContext";

const CheckoutScreen = () => {
  const { cart } = useCart();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contact: "",
      address: {
        firstName: "",
        lastName: "",
        flat: "",
        area: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
      },
      paymentMethod: "razorpay",
    },
  });

  const calculateTotal = () =>
    cart
      .reduce(
        (sum, item) =>
          sum + item.quantity * parseFloat(item.price.replace(/,/g, "")),
        0
      )
      .toFixed(2);

  const handlePlaceOrder = (data) => {
    console.log("Order Data:", data);
    alert("Order Placed!");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Email</Text>
        <Controller
          name="contact"
          control={control}
          rules={{
            required: "Contact information is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.contact && { borderColor: "red" }]}
              placeholder="Email or mobile phone number"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.contact && (
          <Text style={styles.errorText}>{errors.contact.message}</Text>
        )}
      </View>

      {/* Delivery Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        {[
          { name: "address.firstName", placeholder: "First Name" },
          { name: "address.lastName", placeholder: "Last Name" },
          { name: "address.flat", placeholder: "Flat No., House No., etc." },
          {
            name: "address.area",
            placeholder: "Area, Colony, Village, Landmark",
          },
          { name: "address.city", placeholder: "City, Town, Village" },
          { name: "address.state", placeholder: "State" },
          {
            name: "address.pin",
            placeholder: "PIN Code",
            rules: {
              pattern: {
                value: /^[0-9]{6}$/,
                message: "PIN code must be 6 digits",
              },
            },
          },
          {
            name: "address.phone",
            placeholder: "Phone Number",
            rules: {
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            },
          },
        ].map((field, index) => (
          <Controller
            key={index}
            name={field.name}
            control={control}
            rules={{
              required: `${field.placeholder} is required`,
              ...(field.rules || {}),
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  errors[field.name] && { borderColor: "red" },
                ]}
                placeholder={field.placeholder}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        ))}
        {Object.keys(errors).map((key) => {
          if (errors[key]) {
            return (
              <Text key={key} style={styles.errorText}>
                {errors[key]?.message}
              </Text>
            );
          }
          return null;
        })}
      </View>

      {/* Payment Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            getValues("paymentMethod") === "razorpay" && styles.activeOption,
          ]}
          onPress={() => setValue("paymentMethod", "razorpay")}
        >
          <Text>Razorpay 5% Extra Discount</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            getValues("paymentMethod") === "cod" && styles.activeOption,
          ]}
          onPress={() => setValue("paymentMethod", "cod")}
        >
          <Text>Cash on Delivery (COD)</Text>
        </TouchableOpacity>
      </View>

      {/* Order Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cart.map((item, index) => (
          <View key={index} style={styles.orderItem}>
            <Text style={styles.orderItemName}>{item.title}</Text>
            <Text style={styles.orderItemDetails}>
              Qty: {item.quantity} x ₹{item.price}
            </Text>
            <Text style={styles.orderItemPrice}>
              ₹
              {(
                item.quantity * parseFloat(item.price.replace(/,/g, ""))
              ).toFixed(2)}
            </Text>
          </View>
        ))}
        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total Price:</Text>
          <Text style={styles.totalAmount}>₹{calculateTotal()}</Text>
        </View>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handleSubmit(handlePlaceOrder)}
      >
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  orderItem: {
    marginBottom: 10,
  },
  orderItemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  orderItemDetails: {
    fontSize: 14,
    color: "#555",
  },
  orderItemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  paymentOption: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  activeOption: {
    borderColor: "#007bff",
    backgroundColor: "#f0f8ff",
  },
  placeOrderButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  placeOrderButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CheckoutScreen;
