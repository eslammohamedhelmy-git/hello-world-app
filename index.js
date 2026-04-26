const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.status(200).send("hello world");
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});