import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "expo-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          You must be logged in to access this page.
        </Text>
        <Button title="Go to Login" onPress={() => router.push("/login")} />
      </View>
    );
  }

  return children;
};

export default ProtectedRoute;
