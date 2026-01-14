import { AppHeader } from "@/components/base/AppHeader";
import { PostCard } from "@/components/posts/PostsCard";
import { useThemeColors } from "@/hooks/useThemeColor";
import { usePostStore } from "@/store/postsStore";
import { router } from "expo-router";
import React, { useEffect } from "react";
import {
   ActivityIndicator,
   FlatList,
   Pressable,
   RefreshControl,
   StyleSheet,
   Text,
   View,
} from "react-native";

export default function Index() {
   const {
      posts,
      loading,
      error,
      refreshing,
      fetchPosts,
      refreshPosts,
   } = usePostStore();
   const colors = useThemeColors();

   useEffect(() => {
      fetchPosts();
   }, [fetchPosts]);

   return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
         <AppHeader title="List Posts" />

         {loading ? (
            <View style={styles.center}>
               <ActivityIndicator size="large" />
            </View>
         ) : error ? (
            <View style={styles.center}>
               <Text style={[styles.error, { color: colors.danger }]}>{error}</Text>
            </View>
         ) : (
            <FlatList
               data={posts}
               keyExtractor={(item) => item.id.toString()}
               refreshControl={
                  <RefreshControl
                     refreshing={refreshing}
                     onRefresh={refreshPosts}
                  />
               }
               contentContainerStyle={styles.list}
               renderItem={({ item }) => (
                  <Pressable onPress={() => router.push(`/posts/${item.id}`)}>
                     <PostCard post={item} preview />
                  </Pressable>
               )}
            />
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   list: {
      padding: 16,
   },
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
   meta: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
   },
   error: {
      color: "red",
      fontSize: 16,
   },
});