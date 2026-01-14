import { loginApi } from "@/api/auth";

const ACCESS_TOKEN_EXPIRES_IN = 60 * 60 * 1000;

export async function loginService(username: string, password: string) {
   const response = await loginApi(username, password);
   const data = response.data;

   return {
      isAuthenticated: true,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      user: {
         id: data.id,
         firstName: data.firstName,
         lastName: data.lastName,
         maidenName: data.maidenName,
         age: data.age,
         gender: data.gender,
         email: data.email,
         phone: data.phone,
         username: data.username,
      },
      accessTokenExpiration: Date.now() + ACCESS_TOKEN_EXPIRES_IN,
   };
}