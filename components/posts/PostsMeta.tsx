import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
   likes: number;
   dislikes: number;
   views: number;
}

export function PostMeta({ likes, dislikes, views }: Props) {
   return (
      <View style={styles.meta}>
         <Text>👍 {likes}</Text>
         <Text>👎 {dislikes}</Text>
         <Text>👁 {views}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   meta: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
   },
});