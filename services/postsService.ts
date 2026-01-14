import { getPostByIdApi, getPostsApi } from "@/api/posts";

export async function getPostsService() {
   const response = await getPostsApi();
   return response.data.posts;
}

export async function getPostByIdService(postId: number) {
   const response = await getPostByIdApi(postId);
   return response.data;
}