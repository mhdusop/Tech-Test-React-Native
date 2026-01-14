import { loginApi } from "@/api/auth";
import { User } from "@/interfaces/user";

const ACCESS_TOKEN_EXPIRES_IN = 60 * 60 * 1000;

export async function loginService(
   username: string,
   password: string
) {
   const response = await loginApi(username, password);
   const data = response.data;

   const user: User = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      gender: data.gender,
      email: data.email,
      phone: data.phone,
      username: data.username,
   };

   return {
      isAuthenticated: true,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      user,
      accessTokenExpiration: Date.now() + ACCESS_TOKEN_EXPIRES_IN,
   };
}