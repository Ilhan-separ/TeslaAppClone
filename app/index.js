import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import car from "../assets/images/car.png";
import { normalize } from "../utils/scales.js";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Page() {
  return (
    <ScrollView style={styles.container}>
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
      {controlIcons()}
    </ScrollView>
  );
}

const controlIcons = () => {
  const [lock, setLock] = useState(false);
  const [fan, setFan] = useState(false);
  const [bolt, setBolt] = useState(false);
  const [baggage, setBaggage] = useState(false);
  return (
    <View style={styles.control}>
      <Entypo
        onPress={() => setLock(!lock)}
        name="lock"
        size={26}
        style={lock === false ? styles.controlIcon : styles.controlIconActive}
      />
      <MaterialCommunityIcons
        onPress={() => setFan(!fan)}
        name="fan"
        size={26}
        style={fan === false ? styles.controlIcon : styles.controlIconActive}
      />
      <MaterialCommunityIcons
        onPress={() => setBolt(!bolt)}
        name="lightning-bolt"
        size={26}
        style={bolt === false ? styles.controlIcon : styles.controlIconActive}
      />
      <Ionicons
        onPress={() => setBaggage(!baggage)}
        name="car-sport-sharp"
        size={26}
        style={
          baggage === false ? styles.controlIcon : styles.controlIconActive
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    padding: normalize(10),
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
  control: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlIcon: { color: "gray" },
  controlIconActive: {
    color: "white",
    textShadowColor: "#FFFFFFBB",
    textShadowRadius: 14,
    textShadowOffset: { width: 0, height: 0 },
  },
  userCircle: {
    marginTop: normalize(8),
  },
});
