import { loginService } from "@/services/authService";
import { create } from "zustand";

interface AuthStore {
   isAuthenticated: boolean;
   accessToken: string | null;
   refreshToken: string | null;
   user: object | null;
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

   login: async (username: string, password: string) => {
      try {
         const authState = await loginService(username, password);
         set(authState);
         return true;
      } catch (error) {
         console.error("Login failed:", error);
         return false;
      }
   },

   logout: () => set({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      user: null,
      accessTokenExpiration: null,
   })
}))