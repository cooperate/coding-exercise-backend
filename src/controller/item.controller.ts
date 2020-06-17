import Router from '@koa/router';
const itemController = new Router();

itemController
  .get('/item', async(ctx, next) => {
    ctx.body = 'all items';
    await next();
  })
  .post('/item', async(ctx, next) => {
    ctx.body = 'item POST';
    await next();
  })
  .get('/item/:id', async(ctx, next) => {
    ctx.body = 'get single item';
    await next();
  })
  .put('/item/:id', (ctx, next) => {
    // ...
  })
  .del('/item/:id', (ctx, next) => {
    // ...
  })
  .all('/item/:id', (ctx, next) => {
    // ...
  });

export default itemController;