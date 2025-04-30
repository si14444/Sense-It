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

  // 선택지 선택 시 점수 증가
  const handleSelection = (choice: string) => {
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
        {questions[currentIndex.current].choices.map((choice) => (
          <Selection
            key={choice.choice}
            selection={choice.choice}
            onPress={() => handleSelection(choice.choice)}
          />
        ))}
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
    paddingVertical: 36,
  },
  selectionContainer: {
    width: "100%",
    marginTop: 24,
    gap: 12,
  },
});
export default Game;
