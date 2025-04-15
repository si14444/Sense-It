import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          color: "#000000",
        },
        title: "눈치 챙기기",
        headerBackVisible: false,
        // headerBackTitle: "뒤로",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="game" />
      <Stack.Screen name="result" />
    </Stack>
  );
}
