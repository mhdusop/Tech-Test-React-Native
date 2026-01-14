import { getPostsService } from "@/services/postsService";
import { create } from "zustand";

interface Post {
   id: number;
   title: string;
   body: string;
   tags: string[];
   reactions: {
      likes: number;
      dislikes: number;
   };
   views: number;
   userId: number;
}

interface PostStore {
   posts: Post[];
   loading: boolean;
   error: string | null;
   refreshing: boolean;

   fetchPosts: () => Promise<void>;
   refreshPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
   posts: [],
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
