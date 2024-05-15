import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = () => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={{
            backgroundColor: "white",
            borderRadius: 2,
            padding: "offset",
            marginBottom: "offset",
            fontSize: 18,
            fontWeight: "bold",
            color: colors.black,
            flex: 1,
            marginRight: 10,
          }}
          onChangeText={setSubject}
          label="Nəyə fokuslanmaq istəyirsən?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  input: {
    padding: 20,
    justifyContent: "top",
    flexDirection: "row",
  },
});
