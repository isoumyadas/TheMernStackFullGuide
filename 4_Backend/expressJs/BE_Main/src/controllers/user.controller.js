import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend

  const { fullname, email, username, password } = req.body;
  // console.log("Register user:: ", req.body);

  //validation (basic - not empty)

  // This is good but you can use much better way to check all fields
  // if (fullname === "") {
  //     throw new ApiError(400, "fullname is required");
  // }

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if user already exists: username, email

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  // console.log("Register existedUser:: ", existedUser);

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // Check for images, check for avatar
  // console.log("register req.files", req.files);
  const avatarLocalPath = req.files?.avatar[0]?.path; // Multer gives you file info through req.file
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // Upload them to cloudinary, avatar (checking)

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  // console.log("avatar::", avatar);
  // console.log("coverImage:: ", coverImage);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  // create user object - create entry in db

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  // remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // console.log("CreatedUser:: ", createdUser);

  // check for user creation
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  // return res
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };
