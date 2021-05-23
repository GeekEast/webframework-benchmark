const cero = require('0http');
const { router, server } = cero();

router.get('/', (req, res) => {
  res.end('0http');
});

server.listen(3003);
