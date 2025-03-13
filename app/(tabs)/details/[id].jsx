import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Image } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    let res = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(res.data);
  };

  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      }}
    >
      {/* Product Image */}
      {product && (
        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={{
            width: "100%",
            height: 300,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      )}

      {/* Product Title */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {product?.title}
      </Text>

      {/* Brand */}
      <Text
        style={{
          fontSize: 16,
          color: "#555",
          marginBottom: 10,
        }}
      >
        Brand: {product?.brand}
      </Text>

      {/* Price & Rating */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "green",
          }}
        >
          ${product?.price}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "orange",
          }}
        >
          ⭐ {product?.rating}
        </Text>
      </View>

      {/* Description */}
      <Text
        style={{
          fontSize: 14,
          color: "#333",
          lineHeight: 20,
          marginBottom: 20,
        }}
      >
        {product?.description}
      </Text>

      {/* Buy Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#F83758",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
