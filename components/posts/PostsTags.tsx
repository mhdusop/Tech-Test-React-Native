import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
   tags: string[];
}

export function PostTags({ tags }: Props) {
   if (!tags?.length) return null;

   return (
      <View style={styles.container}>
         {tags.map((tag) => (
            <View key={tag} style={styles.tag}>
               <Text style={styles.text}>{tag}</Text>
            </View>
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 12,
   },
   tag: {
      backgroundColor: "#4900e5ff",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 14,
      marginRight: 8,
      marginBottom: 8,
   },
   text: {
      fontSize: 12,
      color: "#FFFFFF",
      textTransform: "capitalize",
   },
});