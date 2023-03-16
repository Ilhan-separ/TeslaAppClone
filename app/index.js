import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/homeScreen/MenuOption";
import ControlOptions from "../components/homeScreen/ControlOptions";

import { normalize } from "../utils/scales.js";

import { FontAwesome } from "@expo/vector-icons";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="battery-3" size={24} color="gray" />
            <Text style={styles.batteryText}> 317 mi</Text>
          </View>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome
          name="user-circle"
          size={30}
          color="gray"
          style={styles.userCircle}
        />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain" />

      <ControlOptions />

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    backgroundColor: "#161818",
  },
  header: {
    padding: normalize(8),
    marginTop: normalize(30),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: normalize(20),
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 4,
  },
  subtitle: {
    marginTop: 4,
    color: "gray",
    fontWeight: "500",
  },
  batteryText: {
    color: "gray",
    marginLeft: 3,
    fontWeight: "700",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: normalize(220),
  },

  userCircle: {
    marginTop: normalize(8),
  },
});
