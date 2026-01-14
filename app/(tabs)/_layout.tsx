import { useThemeColors } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
   const colors = useThemeColors();

   return (
      <Tabs
         screenOptions={{
            headerShown: false,
            tabBarStyle: {
               backgroundColor: colors.card,
               borderTopColor: colors.border,
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.tabInactive,
            tabBarLabelStyle: {
               fontSize: 12,
               fontWeight: "500",
            },
         }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: "Home",
               tabBarIcon: ({ color, size, focused }) => (
                  <Ionicons
                     name={focused ? "home" : "home-outline"}
                     size={size}
                     color={color}
                  />
               ),
            }}
         />

         <Tabs.Screen
            name="profile"
            options={{
               title: "Profile",
               tabBarIcon: ({ color, size, focused }) => (
                  <Ionicons
                     name={focused ? "person" : "person-outline"}
                     size={size}
                     color={color}
                  />
               ),
            }}
         />
      </Tabs>
   );
}