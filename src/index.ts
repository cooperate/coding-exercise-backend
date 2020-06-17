import Koa from "koa";
import koaBody from 'koa-bodyparser';
import itemController from './router/item.controller';
const app = new Koa();
const port = 3000;

// Middlewares
app.use(koaBody());
app.use(itemController.routes()).use(itemController.allowedMethods());

// The `listen` method launches a web server.
app.listen({ port }, () => 
    console.log(`🚀 Server ready at http://localhost:${port}`),
);
