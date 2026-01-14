import { API_URL } from "@/libs/api";
import axios from "axios";

export async function loginApi(username: string, password: string) {
   const response = await axios.post(
      `${API_URL}auth/login`,
      { username, password },
      {
         headers: {
            "Content-Type": "application/json",
         },
         withCredentials: true,
      }
   );

   return response;
}