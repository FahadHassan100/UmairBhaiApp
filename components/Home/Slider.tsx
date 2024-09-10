import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState } from "react";

export default function Slider() {
  const [sliderList, setSliderList] = useState([
    {
      imageName: "abc",
      imageUrl:
        "https://newphilanthropy.ca/Client_Portal/assets/thumbnail_slider/images/008.jpg",
    },
    {
      imageName: "Xyz",
      imageUrl:
        "https://newphilanthropy.ca/Client_Portal/assets/thumbnail_slider/images/009.jpg",
    },
  ]);

  return (
    <View>
      <Text style={Styles.sliderHeading}>#Special for you</Text>

      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Styles.imageSlider}
        renderItem={({ item }) => (
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={Styles.sliderImage}
          />
        )}
        keyExtractor={(item) => item.imageName}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  sliderHeading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    paddingTop: 20,
  },
  imageSlider: {},
  sliderImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
});
