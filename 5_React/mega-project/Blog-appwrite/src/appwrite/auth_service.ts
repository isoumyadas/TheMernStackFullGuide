import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// using class method so we can use that anywhere.

type UserDetailsForLogin = {
  email: string;
  password: string;
  name?: string;
};

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // wrapper of services
  async createAccount({ email, password, name }: UserDetailsForLogin) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Create Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Create > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async login({ email, password }: UserDetailsForLogin) {
    try {
      const userLogin = await this.account.createEmailPasswordSession(
        email,
        password
      );

      if (userLogin) {
        return userLogin;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Login Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Login > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async getCurrentUser() {
    try {
      try {
        return await this.account.get();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Get Current User Operation failed:", error.message); // More specific logging
          throw error; // Re-throw the original error
        }
        console.error("GetCurrentUser > Unknown error occurred:", error);
        throw new Error("An unknown error occurred");
      }
    } catch {
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Logout Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Logout > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }
}

const authService = new AuthService();

export default authService;
