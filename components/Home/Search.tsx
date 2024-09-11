import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchInputArea}>
        <Ionicons name="search-circle-sharp" size={45} color="#1a73e8" />
        <TextInput placeholder="Search...." style={styles.SearchInput} />
      </View>
      <View style={styles.searcFilterIcon}>
        <Ionicons name="filter-circle" size={45} color="#1a73e8" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  searchInputArea: {
    width: 300,
    height: 50,
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#1a73e8",
    borderRadius: 30,
  },
  SearchInput: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  searcFilterIcon: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 3,
  },
});
