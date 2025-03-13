import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import Banner from "../components/screens/Home/Banner";

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor={"#F83758"} style="light" />
      <View style={styles.container}>
        {/* <Text>Tab [Home|Settings]</Text> */}
        <Banner />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
