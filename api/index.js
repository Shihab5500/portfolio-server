// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // routes
// const messageRoutes = require("../routes/messageRoutes");
// app.use("/api", messageRoutes);

// // test route
// app.get("/", (req, res) => {
//   res.send("API running successfully 🚀");
// });

// // MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ Mongo Error:", err));

// // ⚠️ PORT MUST EXIST
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🔥 Server running on port ${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes Import
const messageRoutes = require("../routes/messageRoutes");
const projectRoutes = require("../routes/projectRoutes"); // ✅ নতুন লাইন

// Use Routes
app.use("/api", messageRoutes); 
app.use("/api/projects", projectRoutes); // ✅ নতুন লাইন: প্রজেক্টের সব কাজ এই রুটে হবে

// test route
app.get("/", (req, res) => {
  res.send("API running successfully 🚀");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});