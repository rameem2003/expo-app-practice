import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";

export default function settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Settings
      </Text>

      {/* Dark Mode Toggle */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f8f8f8",
          padding: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      {/* Notification Toggle */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f8f8f8",
          padding: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={() => setNotifications(!notifications)}
        />
      </View>

      {/* Account Settings */}
      <TouchableOpacity
        style={{
          backgroundColor: "#e8f0ff",
          padding: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Manage Account</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity
        style={{
          backgroundColor: "#e8f0ff",
          padding: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
