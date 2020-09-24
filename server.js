const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.use(express.static('build'));

// app.get('/', (req, res) => {
//   res.send('Hello')
// });

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Your Express backend is connected to React' });
});

app.post('/contact', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));