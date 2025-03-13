import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import { useEffect } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React from "react";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 32,
        paddingVertical: 19,
      }}
    >
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>Welcome</Text>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>Back</Text>
      {/* <Link href={"/(tabs)"}>Go</Link> */}

      <View style={{ marginTop: 36 }}>
        <View style={{ position: "relative" }}>
          <Feather
            style={{
              position: "absolute",
              top: "50%",
              zIndex: 10,
              left: 10,
              transform: "translateY(-15%)",
            }}
            name="user"
            size={24}
            color="black"
          />
          <TextInput
            style={{
              padding: 20,
              borderColor: "#A8A8A9",
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#F3F3F3",
              paddingLeft: 38,
            }}
            placeholder="Username or Email"
          />
        </View>
        <View style={{ position: "relative", marginTop: 31 }}>
          <Feather
            style={{
              position: "absolute",
              top: "50%",
              zIndex: 10,
              left: 10,
              transform: "translateY(-15%)",
            }}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput
            style={{
              padding: 20,
              borderColor: "#A8A8A9",
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#F3F3F3",
              paddingLeft: 38,
            }}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <Text style={{ textAlign: "right", marginTop: 10, color: "#F83758" }}>
          Forgot Password?
        </Text>

        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#F83758",
            marginTop: 52,
            borderRadius: 4,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: "semibold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 194 }}>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            Create An Account{" "}
            <Link
              href={"/signup"}
              style={{ fontWeight: "semibold", color: "#F83758" }}
            >
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
