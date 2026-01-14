import { getPostsApi } from "@/api/posts";

export async function getPostsService() {
   const response = await getPostsApi();
   return response.data.posts;
}