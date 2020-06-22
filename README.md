# Lists Application Backend

Important!

This section of the pakcage.json must use src for development and prod for production builds until I find the appropriate course for module alias resolution.

```
  "_moduleAliases": {
    "@model": "src/model",
    "@controller": "src/controller",
    "@mongoose-db": "src/mongoose-db",
    "@routes": "src/routes",
    "~": "src"
  }
```

This application presents two lists with persistent state.  Utilises Koa, Mongoose and Typegoose to create an api service with a persistent state.  Built in typescript.

The backend service runs on port 3001.

## Build the application

In the project directory, you can run:

### `npm start`

This will launch the application in development mode.  Changes will be hot-reloaded through
the use of nodemon. 

### `npm run build`

Builds the application into dist.  Run with node [project root]/index.js.

### `npm run test`

Runs tests using mocha and chai.