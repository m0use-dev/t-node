const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(8080, () => {
  console.log("サーバー起動中");
});
