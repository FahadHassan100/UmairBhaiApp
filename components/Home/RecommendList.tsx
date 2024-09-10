import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import RecommendItem from "./RecommendItem";

const Data = [
  {
    id: 1,
    name: "Electrician",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 2,
    name: "Plumber",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 3,
    name: "Cleaning",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 4,
    name: "Repairing",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 5,
    name: "Painting",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 6,
    name: "Driver",
    picture: require("@/assets/images/p1.jpg"),
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
        nestedScrollEnabled
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: 600,
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
