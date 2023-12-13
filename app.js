const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('pages'));

app.get('/student/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});