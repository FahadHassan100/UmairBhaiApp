import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";

export default function CategoryItem({ category, onCategoryPress }: any) {
  //console.log(category.category.icon);

  return (
    <TouchableNativeFeedback onPress={() => onCategoryPress(category)}>
      <View style={Styles.check}>
        <View style={Styles.iconsBox}>
          <Image source={{ uri: category.icon }} style={Styles.iconStyle} />
        </View>
        <Text style={Styles.iconText}>{category.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const Styles = StyleSheet.create({
  check: {
    display: "flex",
    alignItems: "center",
    marginRight: 30,
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
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 5,
  },
});
