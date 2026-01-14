// components/AppHeader.tsx
import { useAuthStore } from "@/store/authStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
   title: string;
}

export function AppHeader({ title }: Props) {
   const user = useAuthStore((state) => state.user);

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <View>
            <Text style={styles.email}>
               {user?.email ?? "Guest"}
            </Text>
         </View>
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