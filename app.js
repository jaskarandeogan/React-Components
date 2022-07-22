const express = require("express");
const app = express();

const server = app.listen(6168, () => console.log("listening : 6168"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/*", function (req, res) {
  let path = require("path");
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
