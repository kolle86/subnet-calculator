const express = require('express');
const app = express();
const port = 5050;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
