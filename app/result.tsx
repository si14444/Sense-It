import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Result = () => {
  const { score } = useLocalSearchParams();
  // 문자열을 숫자로 변환
  const scoreNumber = parseInt(score as string) || 0;
  // 이미지 로딩 상태 추적
  const [isLoading, setIsLoading] = useState(true);

  // 점수에 따라 적절한 이미지 선택
  const getResultImage = () => {
    console.log(scoreNumber);
    switch (scoreNumber) {
      case 1:
        return require("../assets/result/result1.png");
      case 2:
        return require("../assets/result/result2.png");
      case 3:
        return require("../assets/result/result3.png");
      case 4:
        return require("../assets/result/result4.png");
      default:
        return require("../assets/result/result1.png");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#000" />
            <Text style={styles.loadingText}>결과 이미지 불러오는 중...</Text>
          </View>
        )}
        <Image
          source={getResultImage()}
          style={[styles.image, isLoading && styles.hiddenImage]}
          resizeMode="contain"
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/")} // 홈으로 이동
      >
        <Text style={styles.buttonText}>다시 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  hiddenImage: {
    opacity: 0, // 로딩 중일 때는 이미지를 숨김
  },
  button: {
    width: "50%",
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 100,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
});

export default Result;
