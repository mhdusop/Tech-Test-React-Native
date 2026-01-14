export interface User {
   id: number;
   firstName: string;
   lastName: string;
   age: number;
   gender: "male" | "female";
   email: string;
   phone: string;
   username: string;
}