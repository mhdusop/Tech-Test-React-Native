import { useThemeColors } from '@/hooks/useThemeColor';
import { useAuthStore } from '@/store/authStore';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Page() {
   const { logout } = useAuthStore();
   const colors = useThemeColors();

   const handleLogout = () => {
      logout();
   }

   return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
         <Text>Profile</Text>

         <Pressable
            onPress={handleLogout}
            style={({ pressed }) => [
               styles.logoutButton,
               pressed && { opacity: 0.9 },
            ]}
         >
            <Text style={styles.logoutText}>Logout</Text>
         </Pressable>
      </View>
   )
}

const styles = StyleSheet.create({
   logoutButton: {
      backgroundColor: "#EF4444",
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: "center",
   },
   logoutText: {
      color: "#FFF",
      fontSize: 15,
      fontWeight: "600",
   },
});
