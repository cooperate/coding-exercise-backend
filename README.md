# Lists Application Backend

This application presents two lists with persistent state.  Utilises Koa, Mongoose and Typegoose to create an api service with a persistent state.  Built in typescript.

The backend service runs on port 3001.

Important!

In order for development mode to run correctly, you must run `npm run build` first to compile the app to bypass module-alias path errors.

## Build the application

In the project directory, you can run:

### `npm start`

This will launch the application in development mode.  Changes will be hot-reloaded through
the use of nodemon. 

### `npm run build`

Builds the application into dist.  Run with node [project root]/index.js.

### `npm run test`

Runs tests using mocha and chai.