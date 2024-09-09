import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Search from "@/components/Home/Search";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Search />
      <Slider />
      <Category />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  mainHeading: {
    fontSize: 40,
    fontFamily: "outfit",
  },
});
