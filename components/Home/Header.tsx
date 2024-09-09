import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={Styles.headerSection}>
      <View style={Styles.headingArea}>
        <Text style={Styles.headerHeading}>What Service Do You Need?</Text>
      </View>
      <View style={Styles.headingIcon}>
        <Ionicons name="notifications-circle" size={40} color="gray" />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  headerSection: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    // borderColor: "#000",
    // borderWidth: 1,
  },
  headingArea: {
    width: 250,
  },
  headingIcon: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 10,
  },
  headerHeading: {
    fontSize: 30,
    fontFamily: "outfit-bold",
  },
  headIconArea: {
    textAlign: "right",
  },
});
