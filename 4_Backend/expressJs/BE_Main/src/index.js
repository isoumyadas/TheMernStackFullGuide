// import and configure dotenv file early.
// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is running at port: ${process.env.PORT ? process.env.PORT : 8000}`
      );
    });

    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
  })
  .catch((err) => console.log("MONGO DB connection failed", err));

// 1st way to connect DB
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.error("DB ERROR:", error);
//   }
// })();
