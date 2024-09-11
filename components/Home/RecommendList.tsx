import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import RecommendItem from "./RecommendItem";

const Data = [
  {
    id: 1,
    categoryName: "Electrician",
    username: "Jason Theo",
    picture: require("@/assets/images/E1.jpg"),
    selected: 0,
  },
  {
    id: 2,
    categoryName: "Plumber",
    username: "Hanry paul",
    picture: require("@/assets/images/p1.jpg"),
    selected: 1,
  },
  {
    id: 3,
    categoryName: "Cleaning",
    username: "Emily Maya",
    picture: require("@/assets/images/c1.jpg"),
    selected: 0,
  },
  {
    id: 4,
    categoryName: "Driver",
    username: "Ethan Ryan",
    picture: require("@/assets/images/d1.jpg"),
    selected: 1,
  },
  {
    id: 5,
    categoryName: "Repairing",
    username: "Natalie Rhea",
    picture: require("@/assets/images/p2.jpg"),
    selected: 0,
  },
];

export default function RecommendList() {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.categoryContainer}>
        <Text style={Styles.catHeading}>Recommended</Text>
        <Text style={Styles.catViewAll}>View All</Text>
      </View>
      <FlatList
        data={Data}
        horizontal={false}
        renderItem={({ item }) => <RecommendItem recommeds={item} />}
        scrollEnabled={false}
        //nestedScrollEnabled
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: "auto",
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },
  catHeading: {
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
  catViewAll: {
    fontSize: 14,
    fontFamily: "outfit",
    paddingTop: 5,
  },
});
