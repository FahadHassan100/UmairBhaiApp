import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import RecommendItem from "@/components/Home/RecommendItem";

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
  {
    id: 7,
    name: "Repairing",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 8,
    name: "Painting",
    picture: require("@/assets/images/p1.jpg"),
  },
  {
    id: 9,
    name: "Driver",
    picture: require("@/assets/images/p1.jpg"),
  },
];

export default function Booking() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.checking}>
        <Text>Checking</Text>
      </View>
      <View>
        <FlatList
          data={Data}
          horizontal={false}
          renderItem={({ item }) => <RecommendItem recommeds={item} />}
        />
      </View>
      <View style={styles.abc}>
        <Text>abc</Text>
      </View>
      <View style={styles.def}>
        <Text> def </Text>
      </View>
      <View style={styles.aaa}>
        <Text>a3s21da32s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
  },
  checking: {
    height: 200,
    borderWidth: 2,
    borderColor: "#000",
  },
  abc: {
    height: 200,
    borderWidth: 2,
    borderColor: "#000",
  },
  def: {
    height: 200,
    borderWidth: 2,
    borderColor: "#000",
  },
  aaa: {
    height: 200,
    borderWidth: 2,
    borderColor: "#000",
  },
});
