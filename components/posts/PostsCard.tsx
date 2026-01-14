import { useThemeColors } from "@/hooks/useThemeColor";
import { Posts } from "@/interfaces/posts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostMeta } from "./PostsMeta";

interface Props {
   post: Posts;
   preview?: boolean;
}

export function PostCard({ post, preview = false }: Props) {
   const colors = useThemeColors();

   return (
      <View style={[styles.card, { backgroundColor: colors.card }]}>
         <Text
            style={[styles.title, { color: colors.textPrimary }]}
            numberOfLines={2}
         >
            {post.title}
         </Text>

         <Text
            style={[styles.body, { color: colors.textSecondary }]}
            numberOfLines={preview ? 3 : undefined}
         >
            {post.body}
         </Text>

         <View
            style={[
               styles.divider,
               { backgroundColor: colors.border },
            ]}
         />

         <PostMeta
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   card: {
      backgroundColor: "#FFFFFF",
      borderRadius: 14,
      padding: 16,
      marginBottom: 14,

      // Android shadow
      elevation: 3,

      // iOS shadow
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
   },
   title: {
      fontSize: 16,
      fontWeight: "600",
      color: "#111",
      marginBottom: 6,
      lineHeight: 22,
   },
   body: {
      fontSize: 14,
      color: "#555",
      lineHeight: 20,
   },
   divider: {
      height: 1,
      backgroundColor: "#EEE",
      marginVertical: 12,
   },
});
