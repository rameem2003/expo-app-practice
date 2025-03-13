import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../common/ProductCard";

const Banner = () => {
  const ITEM_HEIGHT = 250; // Adjust based on your item height
  const ITEM_WIDTH = 180; // Adjust based on your item widths
  const [banners, setBanner] = useState([]);

  const fetchBanner = async () => {
    let res = await axios.get("https://dummyjson.com/products");

    setBanner(res.data.products);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <View style={{ width: "100%", padding: 10, marginBottom: 80 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>All Products</Text>

      <View>
        <FlatList
          data={banners}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * Math.floor(index / 2),
            index,
          })}
          renderItem={(data) => <ProductCard data={data} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ margin: 2 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
