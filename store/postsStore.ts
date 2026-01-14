import { Posts } from "@/interfaces/posts";
import { getPostByIdService, getPostsService } from "@/services/postsService";
import { create } from "zustand";

interface PostStore {
   posts: Posts[];
   post: Posts | null;
   loading: boolean;
   error: string | null;
   refreshing: boolean;

   fetchPosts: () => Promise<void>;
   fetchPostsById: (id: number) => Promise<void>;
   refreshPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
   posts: [],
   post: null,
   loading: false,
   error: null,
   refreshing: false,

   fetchPosts: async () => {
      try {
         set({ loading: true, error: null });
         const posts = await getPostsService();
         set({ posts });
      } catch (error) {
         console.error("Failed to fetch posts:", error);
      } finally {
         set({ loading: false });
      }
   },

   fetchPostsById: async (id: number) => {
      try {
         set({ loading: true, error: null });
         const post = await getPostByIdService(id);
         set({ post });
      } catch (error) {
         console.error("Failed to fetch post detail:", error);
         set({ error: "Failed to load post" });
      } finally {
         set({ loading: false });
      }
   },

   refreshPosts: async () => {
      try {
         set({ refreshing: true, error: null });
         const posts = await getPostsService();
         set({ posts });
      } catch (error) {
         console.error("Failed to refresh posts:", error);
      } finally {
         set({ refreshing: false });
      }
   },
}));
