import { PostCard } from "@/components/posts/PostsCard";
import { usePostStore } from "@/store/postsStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PostDetailScreen() {
   const { id } = useLocalSearchParams<{ id: string }>();
   const { post, loading, error, fetchPostsById } = usePostStore();

   useEffect(() => {
      if (id) {
         fetchPostsById(Number(id));
      }
   }, [id, fetchPostsById]);

   if (loading) {
      return (
         <View style={styles.center}>
            <ActivityIndicator size="large" />
         </View>
      );
   }

   if (error) {
      return (
         <View style={styles.center}>
            <Text>{error}</Text>
         </View>
      );
   }

   if (!post) return null;

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <PostCard post={post} />

         <View style={styles.tags}>
            {post.tags.map((tag: string) => (
               <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
               </View>
            ))}
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 16,
   },
   center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   tags: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 12,
   },
   tag: {
      backgroundColor: "#eee",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      marginRight: 8,
      marginBottom: 8,
   },
   tagText: {
      fontSize: 12,
      color: "#555",
   },
   user: {
      marginTop: 16,
      fontSize: 12,
      color: "#666",
   },
});