const express = require("express");
var cors = require("cors");
const app = express();
var bodyParser = require("body-parser");

const port = 3000;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);
app.post("/", (req, res) => {
  res.json("Hello World!");
});
app.post("/login", (req, res) => {
  const username = "jane";
  const password = "12345678";

  //return semua kondisi failed dulu
  //check username
  if (req.body.username != username) {
    res.json({
      status: "Error, Username not found",
    });
  }
  //check pass
  if (req.body.password != password) {
    res.json({
      status: "Error, Wrong Pass",
    });
  }
  //return kondisi sukses
  res.json({
    status: "Sukses",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
