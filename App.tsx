import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// Expo Router를 사용할 때는 App.tsx는 주로 글로벌 설정만 담당
export default function App() {
  useEffect(() => {
    // 앱 초기화 코드를 여기에 작성 (필요한 경우)
  }, []);

  return <StatusBar style="auto" />;
}
