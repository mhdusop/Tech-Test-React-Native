import { darkColors, lightColors } from "@/libs/colors";
import { useThemeStore } from "@/store/themeStore";
import { useColorScheme } from "react-native";

export function useThemeColors() {
   const systemScheme = useColorScheme();
   const mode = useThemeStore((s) => s.mode);

   const activeMode =
      mode === "system" ? systemScheme : mode;

   return activeMode === "dark"
      ? darkColors
      : lightColors;
}
