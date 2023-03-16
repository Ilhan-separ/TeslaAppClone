import { View, StyleSheet } from "react-native";

import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const ControlOptions = () => {
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
        name="car-sport-outline"
        size={26}
        style={
          baggage === false ? styles.controlIcon : styles.controlIconActive
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlIcon: { color: "gray" },
  controlIconActive: {
    color: "#eee",
    textShadowColor: "#FFFFFFBB",
    textShadowRadius: 14,
    textShadowOffset: { width: 0, height: 0 },
  },
});

export default ControlOptions;
