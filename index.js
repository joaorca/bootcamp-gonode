const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Welcome, ${req.params.name}`
  });
});

app.listen(8080);

process.on("SIGINT", () => process.exit());
