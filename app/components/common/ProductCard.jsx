import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const ProductCard = ({ data }) => {
  return (
    <TouchableOpacity
      onPress={() => router.replace(`/details/${data.item.id}`)}
      style={{
        padding: 20,
        width: "48%",
        backgroundColor: "#fff",
        borderColor: "#F83758",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: "auto",
        marginVertical: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Image
        style={{ width: "100%", height: 100 }}
        source={{ uri: data.item.images[0] }}
        resizeMode="cover"
      />

      <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>
        {data.item.title.slice(0, 15)}
      </Text>
      <Text style={{ marginTop: 10 }}>${data.item.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
