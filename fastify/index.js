const fastify = require('fastify')();

fastify.route({
  method: 'GET',
  url: '/',
  handler: async (request, reply) => {
    return 'fastify';
  },
});

const start = async () => {
  try {
    await fastify.listen(3001);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
