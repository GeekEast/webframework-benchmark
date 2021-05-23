var Koa = require('koa');
const Router = require('@koa/router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'koa';
});

app.use(router.routes())


app.listen(3002)