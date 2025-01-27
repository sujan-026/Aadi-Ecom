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
          sum +
          item.quantity *
            (item.selling_price
              ? parseFloat(item.selling_price)
              : 0),
        0
      )
      .toFixed(2);

  const handlePlaceOrder = (data) => {
    console.log("Order Data:", { ...data, cart });
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
          <Text>Razorpay (5% Discount)</Text>
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
              Qty: {item.quantity}
            </Text>
            <Text style={styles.orderItemPrice}>
              Individual Cost  ₹
              {(
                parseFloat(item.selling_price)
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
