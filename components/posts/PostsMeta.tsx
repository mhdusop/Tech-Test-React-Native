import { useThemeColors } from "@/hooks/useThemeColor";
import { PostsReactions } from "@/interfaces/posts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function PostMeta({ likes, dislikes, views }: PostsReactions) {
   return (
      <View style={styles.container}>
         <MetaItem label="Likes" value={likes} />
         <MetaItem label="Dislikes" value={dislikes} />
         <MetaItem label="Views" value={views} />
      </View>
   );
}

function MetaItem({ label, value }: { label: string; value: number }) {
   const colors = useThemeColors();

   return (
      <View style={styles.item}>
         <Text style={[styles.value, { color: colors.textPrimary }]}>{value}</Text>
         <Text style={[styles.label, { color: colors.muted }]}>{label}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-between",
   },
   item: {
      alignItems: "center",
      flex: 1,
   },
   value: {
      fontSize: 14,
      fontWeight: "600",
      color: "#111",
   },
   label: {
      fontSize: 11,
      color: "#777",
      marginTop: 2,
   },
});
