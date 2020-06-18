import 'module-alias/register';
import Koa, {Context} from "koa";
import koaBody from 'koa-bodyparser';
import mongooseConnect from '@mongoose/mongoose';
import router from '@routes/router';

const app = new Koa();
const port = 3000;

// Middlewares
const mongooseConnection = mongooseConnect();
app.use(koaBody());
app.use(async (ctx: Context, next) => {
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}
    console.log('request', ctx.request.body);
    ctx.body = ctx.request.body;
    await next();
});
app
  .use(router.routes())
  .use(router.allowedMethods());
// The `listen` method launches a web server.
const server = app.listen({ port }, () => 
    console.log(`🚀 Server ready at http://localhost:${port}`),
);

export default server;
