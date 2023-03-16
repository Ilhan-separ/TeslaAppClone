import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import carClimate from "../assets/images/climate.png";
import { normalize } from "../utils/scales";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { useState } from "react";
import { sub } from "react-native-reanimated";

const ClimateScreen = () => {
  const router = useRouter();
  const [temperature, setTemperature] = useState(68);
  const [onOff, setOnOff] = useState(true);
  const [vent, setVent] = useState(false);

  const addTemp = () => {
    setTemperature(temperature + 1);
  };
  const subTemp = () => {
    setTemperature(temperature - 1);
  };

  return (
    <View style={styles.conteiner}>
      <StatusBar style="light" />
      <Image source={carClimate} style={styles.image} resizeMode="cover" />
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="white"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
      <View style={styles.footer}>
        <Text style={{ color: "gray", alignSelf: "center", marginBottom: 20 }}>
          Interior 74°F - Exterior 66°F
        </Text>
        <View style={styles.controlRow}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              onPress={() => setOnOff(!onOff)}
              name="power"
              size={42}
              style={onOff ? styles.buttonActive : styles.buttonInActive}
            />
            <Text
              style={
                onOff ? styles.iconButtonTextActive : styles.iconButtonText
              }
            >
              {onOff ? "On" : "Off"}
            </Text>
          </View>
          <View style={styles.temperatureCotainer}>
            <Entypo
              onPress={subTemp}
              name="chevron-left"
              size={30}
              color="gray"
            />
            <Text style={styles.temperatureText}>{temperature}°</Text>
            <Entypo
              onPress={addTemp}
              name="chevron-right"
              size={30}
              color="gray"
            />
          </View>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              onPress={() => setVent(!vent)}
              name="car-door"
              size={42}
              style={vent ? styles.buttonActive : styles.buttonInActive}
            />
            <Text
              style={vent ? styles.iconButtonTextActive : styles.iconButtonText}
            >
              Vent
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingTop: normalize(50),
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "75%",
  },
  backButton: {
    position: "absolute",
    top: normalize(90),
    left: normalize(25),
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: "auto",
  },
  controlRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  iconButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  iconButtonTextActive: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  iconButtonText: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  temperatureCotainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "100",
    color: "white",
    marginLeft: normalize(20),
    marginRight: normalize(16),
  },
  buttonActive: {
    color: "#eee",
    textShadowColor: "#FFFFFFBB",
    textShadowRadius: 14,
    textShadowOffset: { width: 0, height: 0 },
  },
  buttonInActive: {
    color: "gray",
  },
});

export default ClimateScreen;
