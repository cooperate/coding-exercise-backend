import Router from '@koa/router';
import ItemController from '@controller/item.controller';
const routes = new Router();

routes
  .get('/item', ItemController.getItems)
  .post('/item', async(ctx, next) => {
    await ItemController.createItem(ctx);
    next();
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

export default routes;