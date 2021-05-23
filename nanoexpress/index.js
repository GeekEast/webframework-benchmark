const nanoexpress = require('nanoexpress');
const app = nanoexpress();

app.get('/', (req, res) => {
  res.send('pong');
});

app.listen(3004);
