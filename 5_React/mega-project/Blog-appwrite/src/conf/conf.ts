type ENVConfig = {
  appwriteUrl: string;
  appwriteProjectId: string;
  appwriteDatabaseId: string;
  appwriteCollectionId: string;
  appwriteBucketId: string;
};

const conf: ENVConfig = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default conf;

// Why we did this?
/*

-> sometimes env file may not give the exact values, if their are any mistakes or error. 

-> so, by doing this we can assuring that all the values we get from env if either of them are numbers or any other datatype convert this into string.

-> so, we can access that value anywhere in the app which is production grade practice.


*/
