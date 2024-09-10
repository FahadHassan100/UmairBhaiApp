import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Search from "@/components/Home/Search";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";
import RecommendList from "@/components/Home/RecommendList";

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header />
          <Search />
          <Slider />
          <Category />
          <RecommendList />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    height: "auto",
  },
  mainHeading: {
    fontSize: 40,
    fontFamily: "outfit",
  },
});
