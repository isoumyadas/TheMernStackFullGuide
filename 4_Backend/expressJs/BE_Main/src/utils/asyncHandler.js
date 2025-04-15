// Promise Syntax
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// why did passed req,res,next in requestHandler?
// Because when we passed updateUser to asyncHandler, we only passed the function, not its arguments. so we are passing the arguments to get available for particular controller.

//return (req, res, next) => {} gives Express the real middleware to use.

//=======================================================================================

// The try catch method.
// passing the param fn and using another fun or accessing another fn.

//It is same as this:
// const asyncHandler = (func) => {async () => {}}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// their should be an global error handler at the end.

export { asyncHandler };
