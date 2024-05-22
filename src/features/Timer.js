import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={() => {}}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Fokuslanmışıq:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="başla"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        ) : (
          <RoundedButton
            title="saxla"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
