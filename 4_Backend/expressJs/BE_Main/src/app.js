import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// CORS is an HTTP-header-based mechanism that allows a server to indicate which origins (domain, scheme, or port) other than its own from which a browser should permit loading resources

// When it is useful: Your frontend and backend are on different domains/ports and you want secure communication with credentials.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // cookies, tokens, or authentication headers can be sent with requests.
  })
);

// tells the Express app to parse incoming JSON request bodies, but only up to 16 kilobytes in size.
// It converts incoming JSON data into JavaScript objects — so you can access it via req.body.
app.use(
  express.json({
    limit: "16kb",
  })
);

// This parses URL-encoded form data (like from HTML forms) and makes it available in req.body (it converts form data to JS objects)
app.use(
  express.urlencoded({
    extended: true, //allows nested objects
    limit: "16kb",
  })
);
// is used to serve static files (like CSS, images, JS) from a folder
app.use(express.static("public"));

// cookieParser() parses the raw Cookie header from the request and converts it into a JavaScript object attached to req.cookies.
app.use(cookieParser());

//Routes
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
