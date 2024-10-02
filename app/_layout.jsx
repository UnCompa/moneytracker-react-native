import { Stack } from "expo-router/stack";
import {
  StatusBar,
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function Layout() {
  useEffect(() => {
    // Configura la StatusBar al cargar la aplicación
    if (Platform.OS === "android") {
      setStatusBarBackgroundColor("#09090b");
      setStatusBarStyle("light");
    }
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      </Stack>
      {/* Esto asegura que la StatusBar se renderice al cargar */}
      <StatusBar style="light" backgroundColor="#09090b" animated />
    </>
  );
}
