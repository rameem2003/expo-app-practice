import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
      }}
    >
      {/* App Name */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 10,
          color: "#333",
        }}
      >
        My Shopping App
      </Text>

      {/* App Description */}
      <Text
        style={{
          fontSize: 16,
          color: "#555",
          textAlign: "center",
          marginBottom: 20,
          lineHeight: 22,
        }}
      >
        Welcome to My Shopping App! Your one-stop destination for amazing
        products at the best prices. We offer a seamless shopping experience
        with a vast collection of top-quality items.
      </Text>

      {/* Features Section */}
      <View
        style={{
          backgroundColor: "#f8f8f8",
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Key Features:
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          ✔ Browse thousands of products
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          ✔ Secure checkout process
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          ✔ Fast delivery options
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          ✔ Easy returns & refunds
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          ✔ 24/7 Customer support
        </Text>
      </View>

      {/* Contact Information */}
      <View
        style={{
          padding: 15,
          backgroundColor: "#e8f0ff",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Contact Us:
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          📧 Email: support@shoppingapp.com
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          📞 Phone: +1 234 567 890
        </Text>
        <Text style={{ fontSize: 16 }}>🌍 Website: www.shoppingapp.com</Text>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
