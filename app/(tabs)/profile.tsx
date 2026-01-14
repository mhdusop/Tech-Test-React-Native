import { useAuthStore } from '@/store/authStore';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Page() {
   const { logout } = useAuthStore();

   const handleLogout = () => {
      logout();
   }

   return (
      <View>
         <Text>Profile</Text>

         <Button title="Logout" onPress={handleLogout} />
      </View>
   )
}