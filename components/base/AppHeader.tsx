// components/AppHeader.tsx
import { useThemeColors } from "@/hooks/useThemeColor";
import { useAuthStore } from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";
import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

interface Props {
   title: string;
}

export function AppHeader({ title }: Props) {
   const user = useAuthStore((state) => state.user);
   const { mode, setMode } = useThemeStore();
   const colors = useThemeColors();

   const isDark = mode === "dark";

   return (
      <View
         style={[
            styles.container,
            {
               backgroundColor: colors.card,
               borderBottomColor: colors.border,
            },
         ]}
      >
         {/* LEFT */}
         <View>
            <Text
               style={[
                  styles.title,
                  { color: colors.textPrimary },
               ]}
            >
               {title}
            </Text>

            <Text
               style={[
                  styles.email,
                  { color: colors.textSecondary },
               ]}
            >
               {user?.email ?? "Guest"}
            </Text>
         </View>

         {/* RIGHT */}
         <Switch
            value={isDark}
            onValueChange={(val) =>
               setMode(val ? "dark" : "light")
            }
            thumbColor={isDark ? colors.primary : "#f4f4f5"}
            trackColor={{
               false: colors.border,
               true: colors.primary,
            }}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 40,
      paddingBottom: 16,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
   },
   email: {
      fontSize: 12,
      color: "#666",
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 4,
   },
});