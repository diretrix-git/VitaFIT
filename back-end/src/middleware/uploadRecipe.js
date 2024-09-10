// const multer = require("multer");
// const { diskStorage } = require("multer");
// const path = require("path");

// // Regular expression to eliminate whitespace and special characters from file names
// const re = new RegExp("\\s+", "g");
// const sanitizeFileName = (fileName) => {
//   return fileName.replace(re, "-").replace(/[^a-zA-Z0-9_\-\.]/g, "");
// };

// // Function to handle file naming
// const filename = (req, file, next) => {
//   let lastDotIndex = file.originalname.lastIndexOf(".");
//   let originalName = file.originalname.substring(0, lastDotIndex);
//   let ext = file.originalname.substring(lastDotIndex);
//   next(null, `${sanitizeFileName(originalName)}-${Date.now()}${ext}`);
// };

// // Function to filter file types for images
// const imageFilter = (req, file, next) => {
//   const allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "image/jpg",
//     "image/gif",
//     "image/webp",
//   ];
//   if (allowedTypes.includes(file.mimetype)) {
//     next(null, true);
//   } else {
//     next(null, false);
//     return next(
//       new Error("Only .jpeg, .jpg, .png, .mp4, .gif, and webp formats allowed!")
//     );
//   }
// };

// // Function to filter file types for videos
// const videoFilter = (req, file, next) => {
//   const allowedTypes = ["video/mp4"];
//   if (allowedTypes.includes(file.mimetype)) {
//     next(null, true);
//   } else {
//     next(null, false);
//     return next(new Error("Only .mp4 format allowed for videos!"));
//   }
// };

// // Function to get the destination path
// const getDestination = (folderName) => {
//   return (req, file, next) => {
//     next(null, path.join(__dirname, `../../uploads/${folderName}`));
//   };
// };

// // Storage configurations for images
// const imageStorage = diskStorage({
//   destination: getDestination("recipeImg"),
//   filename,
// });

// // Storage configurations for videos
// const videoStorage = diskStorage({
//   destination: getDestination("recipeVideo"),
//   filename,
// });

// // Multer instances for image and video uploads
// const uploadRecipeImagesss = multer({
//   storage: imageStorage,
//   fileFilter: imageFilter,
// });

// const uploadRecipeVideosss = multer({
//   storage: videoStorage,
//   fileFilter: videoFilter,
// });

// module.exports = {
//   uploadRecipeImagesss,
//   uploadRecipeVideosss,
// };
