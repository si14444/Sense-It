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
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: 160,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Questions;
