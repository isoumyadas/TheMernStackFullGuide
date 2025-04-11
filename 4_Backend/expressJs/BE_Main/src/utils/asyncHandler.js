// Promise Syntax
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

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
