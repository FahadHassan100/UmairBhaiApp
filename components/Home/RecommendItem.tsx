import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function RecommendItem({ recommeds }: any) {
  return (
    <View>
      <View style={styles.rbox}>
        <View style={styles.serviceProvicer}>
          <View style={styles.picArea}>
            <Image source={recommeds.picture} style={styles.rPicture} />
          </View>
          <View>
            <Text style={styles.catName}>{recommeds.categoryName}</Text>
            <Text style={styles.userName}>{recommeds.username}</Text>
            <View style={styles.PandRSection}>
              <Text style={styles.priceRate}>$20</Text>
              <Text style={styles.hourRate}>/hr</Text>
              <Image
                source={require("@/assets/images/star.png")}
                style={styles.star}
              />
              <Text style={styles.rating}>4.9(120 Reviews)</Text>
            </View>
          </View>
        </View>
        <View style={styles.check}>
          {recommeds.selected === 0 ? (
            <Fontisto name="favorite" size={24} color="#c1c1c1" />
          ) : (
            <Fontisto name="favorite" size={24} color="#1a73e8" />
          )}
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
  serviceProvicer: {
    display: "flex",
    flexDirection: "row",
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
    marginRight: 5,
  },
  star: {
    width: 15,
    height: 15,
    marginTop: 3,
    marginRight: 5,
  },
  rating: {
    fontSize: 12,
    lineHeight: 20,
  },
  check: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 15,
    marginTop: 10,
    flex: 1,
  },
});
