const express = require("express");
const cors = require("cors");
const path = require("path");

const chatRoutes = require("./routes/chat.routes");

const app = express();

app.use(cors());
app.use(express.json());
// Serve chatbot SDK
app.use(
  "/sdk",
  express.static(path.join(__dirname, "../public"))
);

app.use("/api/chat", chatRoutes);

module.exports = app;
