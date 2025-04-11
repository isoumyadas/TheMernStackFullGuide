import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// CORS is an HTTP-header-based mechanism that allows a server to indicate which origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// This expect json file and limit of 16kb
app.use(
  express.json({
    limit: "16kb",
  })
);

// any kind of url encoded with the particular limit
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//  is used to serve static files (like CSS, images, JS) from a folder
app.use(express.static("public"));

app.use(cookieParser());

//Routes
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
