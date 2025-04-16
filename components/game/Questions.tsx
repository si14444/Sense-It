import { StyleSheet, Text, View } from "react-native";

const Questions = ({ question }: { question: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f7f9",
    alignItems: "center",
    width: "100%",
    height: "25%",
    justifyContent: "center",
    padding: 24,
    borderWidth: 2,
    borderColor: "#333333",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
    lineHeight: 30,
  },
});

export default Questions;
