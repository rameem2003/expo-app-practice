import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import AccountAvatar from "../components/AccountAvatar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerStyle: {
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          backgroundColor: "#F83758",
          // paddingHorizontal: 20,
        },

        headerTitle: "Goriber Bazar",

        headerTitleAlign: "center",
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#F83758",
        tabBarInactiveTintColor: "#000",

        headerRight: () => <AccountAvatar />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",

          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",

          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="details/[id]"
        options={{
          href: null,

          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
