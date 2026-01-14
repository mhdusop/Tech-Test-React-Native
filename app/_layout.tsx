import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(tabs)" options={{ header: () => null }} />
      </Stack.Protected>

      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="index" options={{ header: () => null }} />
        <Stack.Screen name="login" options={{ header: () => null }} />
      </Stack.Protected>
    </Stack>
  )
}
