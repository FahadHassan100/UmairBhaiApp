import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import { router } from "expo-router";

const Data = [
  {
    id: 1,
    name: "Electrician",
    icon: "https://cdn-icons-png.flaticon.com/128/3713/3713314.png",
  },
  {
    id: 2,
    name: "Plumber",
    icon: "https://cdn-icons-png.flaticon.com/128/12029/12029339.png",
  },
  {
    id: 3,
    name: "Cleaning",
    icon: "https://cdn-icons-png.flaticon.com/128/11678/11678068.png",
  },
  {
    id: 4,
    name: "Repairing",
    icon: "https://cdn-icons-png.flaticon.com/128/12029/12029589.png",
  },
  {
    id: 5,
    name: "Painting",
    icon: "https://cdn-icons-png.flaticon.com/128/16434/16434705.png",
  },
  {
    id: 6,
    name: "Driver",
    icon: "https://cdn-icons-png.flaticon.com/128/2684/2684218.png",
  },
];

export default function Category() {
  return (
    <View>
      <View style={Styles.categoryContainer}>
        <Text style={Styles.catHeading}>Category</Text>
        <Text style={Styles.catViewAll}>View All</Text>
      </View>
      <FlatList
        data={Data}
        horizontal={true}
        renderItem={({ item, index }) => (
          <CategoryItem
            category={item}
            key={index}
            onCategoryPress={(category: any) =>
              router.push("/categorylist/check")
            }
          />
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
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
