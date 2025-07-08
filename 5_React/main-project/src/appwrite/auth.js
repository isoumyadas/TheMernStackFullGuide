import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.client
      .call("get", "/health")
      .then(() => console.log("✅ Ping successful"))
      .catch((err) => console.error("❌ Ping failed", err));

    this.account = new Account(this.client);
    console.log("Hols", this.account);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(
        `Appwrite service:: createAccount :: error => ${error.message}`
      );
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(`Appwrite service:: login :: error => ${error.message}`);
    }
  }

  async getCurrentUser() {
    try {
      console.log("working 1", await this.account.get());
      return await this.account.get();
    } catch (error) {
      throw new Error(
        `Appwrite service:: getCurrentUser :: error => ${error.message}`
      );
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw new Error(`Appwrite service:: logout :: error => ${error.message}`);
    }
  }
}

const authService = new AuthService();

export default authService;
