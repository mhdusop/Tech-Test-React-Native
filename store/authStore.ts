import { User } from "@/interfaces/user";
import { storage } from "@/libs/asyncStorage";
import { STORAGE_KEYS } from "@/libs/storageKeys";
import { loginService } from "@/services/authService";
import { create } from "zustand";

interface AuthStore {
   isAuthenticated: boolean;
   accessToken: string | null;
   refreshToken: string | null;
   user: User | null;
   accessTokenExpiration: number | null;

   login: (username: string, password: string) => Promise<boolean>;
   logout: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
   isAuthenticated: false,
   accessToken: null,
   refreshToken: null,
   user: null,
   accessTokenExpiration: null,

   login: async (username, password) => {
      try {
         const authState = await loginService(username, password);

         await storage.set(STORAGE_KEYS.ACCESS_TOKEN, authState.accessToken);
         await storage.set(STORAGE_KEYS.REFRESH_TOKEN, authState.refreshToken);
         await storage.set(STORAGE_KEYS.USER, authState.user);
         await storage.set(
            STORAGE_KEYS.TOKEN_EXP,
            authState.accessTokenExpiration
         );

         set(authState);
         return true;
      } catch (error) {
         console.error("Login failed:", error);
         return false;
      }
   },

   logout: async () => {
      await storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
      await storage.remove(STORAGE_KEYS.REFRESH_TOKEN);
      await storage.remove(STORAGE_KEYS.USER);
      await storage.remove(STORAGE_KEYS.TOKEN_EXP);

      set({
         isAuthenticated: false,
         accessToken: null,
         refreshToken: null,
         user: null,
         accessTokenExpiration: null,
      });
   },
}))