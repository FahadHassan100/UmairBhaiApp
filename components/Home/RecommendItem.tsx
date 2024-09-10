import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RecommendItem({ recommeds }: any) {
  return (
    <View>
      <View style={styles.rbox}>
        <View style={styles.picArea}>
          <Image source={recommeds.picture} style={styles.rPicture} />
        </View>
        <View>
          <Text style={styles.catName}>Category Name</Text>
          <Text style={styles.userName}>Fahad Hassan</Text>
          <View style={styles.PandRSection}>
            <Text style={styles.priceRate}>$20</Text>
            <Text style={styles.hourRate}>/hr</Text>
            <Text>Star</Text>
            <Text style={styles.rating}>4.9(120 Reviews)</Text>
          </View>
        </View>
        <View>
          <Text>Save</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rbox: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#c1c1c1",
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  picArea: {
    marginLeft: 5,
    marginRight: 15,
  },
  rPicture: {
    width: 80,
    height: 100,
  },
  catName: {
    fontSize: 18,
    fontFamily: "outfit-bold",
    fontWeight: "bold",
  },
  userName: {
    color: "#c1c1c1",
    fontSize: 12,
    marginBottom: 20,
  },
  PandRSection: {
    display: "flex",
    flexDirection: "row",
  },
  priceRate: {
    color: "#1a73e8",
    fontSize: 14,
  },
  hourRate: {
    fontSize: 12,
    lineHeight: 22,
  },
  rating: {
    fontSize: 14,
  },
});
