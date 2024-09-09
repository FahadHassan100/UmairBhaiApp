import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchInputArea}>
        <Ionicons name="search-circle-sharp" size={30} color="gray" />
        <TextInput placeholder="Search...." style={styles.SearchInput} />
      </View>
      <View style={styles.searcFilterIcon}>
        <Ionicons name="filter-circle" size={35} color="gray" />
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
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 20,
  },
  SearchInput: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  searcFilterIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
});
