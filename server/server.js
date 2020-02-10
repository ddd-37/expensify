const express = require("express");
const app = express();
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));

// Serve up the index page no matter what
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running!");
});
