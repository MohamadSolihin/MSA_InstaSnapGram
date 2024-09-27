import { Client, Account, Database, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_PROJECT_ID,
};

export const client = new Client();
export const storage = new Storage();
export const avatars = new Avatars();
export const Account = new Account();
export const database = new Database();
