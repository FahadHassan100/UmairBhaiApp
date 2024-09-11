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
        <Ionicons name="notifications-circle" size={45} color="#1a73e8" />
        <Text style={Styles.numOfNoti}>4</Text>
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
  numOfNoti: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 50,
    color: "#fff",
    fontSize: 10,
    width: 20,
    height: 20,
    paddingLeft: 7,
    paddingTop: 3,
  },
  headerHeading: {
    fontSize: 30,
    fontFamily: "outfit-bold",
  },
  headIconArea: {
    textAlign: "right",
  },
});
