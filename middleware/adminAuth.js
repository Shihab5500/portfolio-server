// module.exports = (req, res, next) => {
//   const adminKey = req.headers["x-admin-key"];

//   if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
//     return res.status(401).json({
//       success: false,
//       message: "Unauthorized admin access",
//     });
//   }

//   next();
// };

// const dotenv = require("dotenv");
// dotenv.config();

// module.exports = (req, res, next) => {
//   // ফ্রন্টএন্ড থেকে পাঠানো চাবি (Key)
//   const adminKey = req.headers["x-admin-key"];
//   // সার্ভারের .env ফাইলে থাকা আসল চাবি
//   const secretKey = process.env.ADMIN_KEY;

//   if (!adminKey || adminKey !== secretKey) {
//     return res.status(401).json({
//       success: false,
//       message: "Unauthorized admin access! ❌",
//     });
//   }

//   next();
// };


const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  const adminKey = req.headers["x-admin-key"];
  const secretKey = process.env.ADMIN_KEY;

  if (!adminKey || adminKey !== secretKey) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized admin access! ❌",
    });
  }

  next();
};