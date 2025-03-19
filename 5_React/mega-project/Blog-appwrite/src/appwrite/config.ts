// major config of appwrite

import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

type PostPrams = {
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: string;
  userId: string;
};

export class DBService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
  }: PostPrams) {
    try {
      const userPost = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // this is what we store as document ID
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );

      return userPost;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Create Post Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Create Post > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async updatePost(
    slug: string,
    { title, content, featuredImage, status }: PostPrams
  ) {
    try {
      const userUpdatePost = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // this is what we store as document ID
        {
          title,
          content,
          featuredImage,
          status,
        }
      );

      return userUpdatePost;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Update Post Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Update Post > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async deletePost(slug: string) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug // this is what we store as document ID
      );
      console.log("post is deleted");
      return "POST IS DELETED";
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Delete Post Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Delete Post > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async getPost(slug: string) {
    try {
      const getUserPost = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      console.log("Get Post Successful");
      return getUserPost;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Get Post Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Get Post > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      const getALLUserPost = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
        // pagination can be included
      );

      console.log("Get All Post Successful");
      return getALLUserPost;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Get All Post Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("Get All Post > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  // file Upload services [Create a seprate file]

  async uploadFile(file) {
    try {
      const userUploadFile = await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(), // file ID
        file
      );

      console.log("Upload File successful");
      return userUploadFile;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("File Upload Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("File Upload > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async deleteFile(fileId: string) {
    try {
      const userDeleteFile = await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId
      );

      console.log("Delete File successful");
      return userDeleteFile;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("File Delete Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("File Delete > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }

  async getFilePreview(fileId: string) {
    try {
      const previewFile = await this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
      );

      console.log("Delete File successful");
      return previewFile;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("previewFile Operation failed:", error.message); // More specific logging
        throw error; // Re-throw the original error
      }
      console.error("previewFile > Unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }
}

const databaseService = new DBService();

export default databaseService;
