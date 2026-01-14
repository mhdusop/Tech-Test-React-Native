import { loginApi } from "@/api/auth";

const ACCESS_TOKEN_EXPIRES_IN = 60 * 60 * 1000;

export async function loginService(
   username: string,
   password: string
) {
   const response = await loginApi(username, password);

   const data = response.data;

   const authData = {
      isAuthenticated: true,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      user: data.user,
      accessTokenExpiration: Date.now() + ACCESS_TOKEN_EXPIRES_IN,
   }

   return authData;
}