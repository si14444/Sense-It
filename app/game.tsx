import { router } from "expo-router";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Questions from "../components/game/Questions";
import Selection from "../components/game/Selection";
import { questionList } from "../constants/questions";
const Game = () => {
  const [score, setScore] = useState(0);

  const currentIndex = useRef(0);
  // 랜덤으로 5개의 질문을 뽑아온다.
  const questions = [...questionList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((question) => question);

  const handleSelection = (choice: string) => {
    console.log(currentIndex.current + 1, questions.length);
    if (currentIndex.current + 1 >= questions.length) {
      router.push({
        pathname: "/result",
        params: { score: score / 5 },
      });
      return;
    }
    const selectedQuestion = questions[currentIndex.current];
    const selectedChoice = selectedQuestion.choices.find(
      (c) => c.choice === choice
    );
    if (selectedChoice) {
      setScore(score + selectedChoice.score);
      currentIndex.current++;
    }
  };

  return (
    <View style={styles.container}>
      <Questions question={questions[currentIndex.current].situation} />
      <View style={styles.selectionContainer}>
        <Selection
          selection={questions[currentIndex.current].choices[0].choice}
          onPress={() =>
            handleSelection(questions[currentIndex.current].choices[0].choice)
          }
        />
        <Selection
          selection={questions[currentIndex.current].choices[1].choice}
          onPress={() =>
            handleSelection(questions[currentIndex.current].choices[1].choice)
          }
        />
        <Selection
          selection={questions[currentIndex.current].choices[2].choice}
          onPress={() =>
            handleSelection(questions[currentIndex.current].choices[2].choice)
          }
        />
        <Selection
          selection={questions[currentIndex.current].choices[3].choice}
          onPress={() =>
            handleSelection(questions[currentIndex.current].choices[3].choice)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 24,
    paddingVertical: 48,
  },
  selectionContainer: {
    width: "100%",
    marginTop: 48,
    gap: 24,
  },
});
export default Game;
