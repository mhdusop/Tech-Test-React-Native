import { useThemeColors } from "@/hooks/useThemeColor";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import {
   ActivityIndicator,
   Alert,
   KeyboardAvoidingView,
   Pressable,
   StyleSheet,
   Text,
   TextInput,
   View
} from "react-native";

const LoginScreen = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

   const { login } = useAuthStore();
   const colors = useThemeColors();

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
      <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.background }]}>
         <View>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
               Login
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
               Sign in to continue
            </Text>

            <View style={styles.field}>
               <Text style={[styles.label, { color: colors.textSecondary }]}>
                  Username
               </Text>
               <TextInput
                  value={username}
                  onChangeText={setUsername}
                  style={styles.input}
                  placeholder="Enter your username"
                  autoCapitalize="none"
               />
            </View>

            <View style={styles.field}>
               <Text style={[styles.label, { color: colors.textSecondary }]}>
                  Password
               </Text>
               <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry
               />
            </View>

            <Pressable
               style={[
                  styles.button,
                  { backgroundColor: colors.primary },
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
