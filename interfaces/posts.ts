export interface PostsReactions {
   likes: number;
   dislikes: number;
   views: number;
}

export interface Posts {
   id: number;
   title: string;
   body: string;
   tags: string[];
   reactions: PostsReactions;
   views: number;
   userId: number;
}