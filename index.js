const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("list", { name: "João" });
});

app.listen(8080);

process.on("SIGINT", () => process.exit());
