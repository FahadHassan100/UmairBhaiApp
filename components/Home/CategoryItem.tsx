import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CategoryItem(category: any) {
  //console.log(category.category.icon);

  return (
    <View style={Styles.check}>
      <View style={Styles.iconsBox}>
        <Image
          source={{ uri: category.category.icon }}
          style={Styles.iconStyle}
        />
      </View>
      <Text style={Styles.iconText}>{category.category.name}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  check: {
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  iconsBox: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dfdfdf",
    alignItems: "center",
  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  iconText: {
    fontSize: 12,
    color: "#c1c1c1",
  },
});
