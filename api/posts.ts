import { API_URL } from "@/libs/api";
import axios from "axios";

export async function getPostsApi() {
   const response = await axios.get(
      `${API_URL}posts`,
   );

   return response;
}