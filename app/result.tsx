import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
const Result = () => {
  const { score } = useLocalSearchParams();
  return (
    <View>
      <Text>게임 결과</Text>
      <Text>{score}</Text>
    </View>
  );
};

export default Result;
