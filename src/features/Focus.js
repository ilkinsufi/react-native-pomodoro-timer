import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput label="Nəyə fokuslanmaq istəyirsən?" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 0.5,
    padding: 25,
    justifyContent: "top",
  },
  text: {
    color: colors.white,
  },
});
