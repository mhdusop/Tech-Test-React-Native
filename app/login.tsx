import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import {
   ActivityIndicator,
   Alert,
   KeyboardAvoidingView,
   Platform,
   Pressable,
   StyleSheet,
   Text,
   TextInput,
   View,
} from "react-native";

const LoginScreen = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

   const { login } = useAuthStore();

   const handleLogin = async () => {
      if (!username || !password) {
         Alert.alert("Error", "Username and password are required");
         return;
      }

      setLoading(true);
      const success = await login(username, password);
      setLoading(false);

      if (!success) {
         Alert.alert("Login Failed", "Invalid username or password");
      }
   };

   return (
      <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
         <View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            <View style={styles.field}>
               <Text style={styles.label}>Username</Text>
               <TextInput
                  value={username}
                  onChangeText={setUsername}
                  style={styles.input}
                  placeholder="Enter your username"
                  autoCapitalize="none"
               />
            </View>

            <View style={styles.field}>
               <Text style={styles.label}>Password</Text>
               <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry
               />
            </View>

            <Pressable
               style={({ pressed }) => [
                  styles.button,
                  pressed && { opacity: 0.9 },
                  loading && { opacity: 0.6 },
               ]}
               onPress={handleLogin}
               disabled={loading}
            >
               {loading ? (
                  <ActivityIndicator color="#fff" />
               ) : (
                  <Text style={styles.buttonText}>Sign In</Text>
               )}
            </Pressable>
         </View>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F6F7FB",
      justifyContent: "center",
      paddingHorizontal: 20,
   },
   title: {
      fontSize: 22,
      fontWeight: "700",
      textAlign: "center",
   },
   subtitle: {
      fontSize: 14,
      color: "#777",
      textAlign: "center",
      marginBottom: 24,
   },
   field: {
      marginBottom: 16,
   },
   label: {
      fontSize: 12,
      color: "#555",
      marginBottom: 6,
   },
   input: {
      height: 44,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      paddingHorizontal: 12,
      fontSize: 14,
      backgroundColor: "#fafafa",
   },
   button: {
      height: 46,
      backgroundColor: "#4F46E5",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
   },
   buttonText: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "600",
   },
});


export default LoginScreen;
