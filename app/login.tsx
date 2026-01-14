import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const { login } = useAuthStore();

   const handleLogin = () => {
      login()
   }

   return (
      <View style={styles.container}>
         <Text>Username</Text>
         <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholder="Enter your username"
         />

         <Text>Password</Text>
         <TextInput value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            placeholder="Enter your password"
         />

         <Button title="Sign In" onPress={handleLogin} />
      </View>
   )
}

export default LoginScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
   },
   input: {
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
   },
});