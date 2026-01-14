import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostMeta } from "./PostsMeta";

interface Post {
   title: string;
   body: string;
   reactions: {
      likes: number;
      dislikes: number;
   };
   views: number;
}

interface Props {
   post: Post;
   preview?: boolean;
}

export function PostCard({ post, preview = false }: Props) {
   return (
      <View style={styles.card}>
         <Text style={styles.title}>{post.title}</Text>

         <Text
            style={styles.body}
            numberOfLines={preview ? 3 : undefined}
         >
            {post.body}
         </Text>

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
      padding: 16,
      backgroundColor: "#fff",
      borderRadius: 8,
      marginBottom: 12,
      elevation: 2,
   },
   title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 6,
   },
   body: {
      fontSize: 14,
      color: "#444",
   },
});
