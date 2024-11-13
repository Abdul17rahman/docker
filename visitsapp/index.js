const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  url: "redis://redis-server:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect().then(() => {
  console.log("Connected to Redis.");
  client.set("visits", 0);
});

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send(`This app has been visited ${visits} times.`);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8080, (req, res) => {
  console.log("Server started on port 8080..");
});
