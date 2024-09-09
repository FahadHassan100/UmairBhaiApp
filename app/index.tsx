import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import Home from "./(tabs)/home";

export default function Index() {
  return <Redirect href="/(tabs)/home" />;
}
