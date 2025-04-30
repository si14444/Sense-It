import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Selection = ({
  selection,
  onPress,
}: {
  selection: string;
  onPress: () => void;
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, isPressed && styles.containerPressed]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      activeOpacity={0.9}
    >
      <Text style={[styles.buttonText, isPressed && styles.buttonTextPressed]}>
        {selection}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    width: "100%",
    height: "auto",
    minHeight: 60,
    padding: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  containerPressed: {
    backgroundColor: "#f0f0f0",
    borderColor: "#000000",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: "#111111",
  },
  buttonTextPressed: {
    color: "#222",
  },
});

export default Selection;
