const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World from myapp! 🚀");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.get("/readyz", (req, res) => {
  res.status(200).send("ready");
});

app.listen(port, () => {
  console.log(`✅ App running on http://localhost:${port}`);
});

