import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AccountAvatar = () => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../../assets/images/2289_SkVNQSBGQU1PIDEwMjgtMTE2 1.png")}
      />
    </TouchableOpacity>
  );
};

export default AccountAvatar;

const styles = StyleSheet.create({});
