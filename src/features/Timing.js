import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={60}
          title="10"
          onPress={() => onChangeTime(10)}
        ></RoundedButton>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={60}
          title="15"
          onPress={() => onChangeTime(15)}
        ></RoundedButton>
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={60}
          title="20"
          onPress={() => onChangeTime(20)}
        ></RoundedButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
