const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker web App.");
});

app.listen(8080, (req, res) => {
  console.log("Server is running...");
});
