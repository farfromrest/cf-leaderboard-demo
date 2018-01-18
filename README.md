# CF Leaderboard Demo

Rough demo app of the leaderboard built with [React](https://reactjs.org/) & [Redux](https://redux.js.org/). Build setup uses [webpack](https://webpack.js.org/). Heavily using [Babel](https://babeljs.io/) compiler for writing JS with ES2015 syntax and other up and coming features. Uses [SCSS](http://sass-lang.com/) for stylesheets while utilizing CSS modules.

:exclamation: * If you want to run this the CF API doesn't allow cross domain access the requests will fail. You could use this [Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) to make the requests work. *
:exclamation:

## Prerequisites

### [Node](https://nodejs.org/en/) / [NVM](https://github.com/creationix/nvm)
Project contains a `.nvmrc` to make it easy to use the same version of Node. Not a requirement, but will make it easier if you have a different version of Node installed.

### [yarn](https://yarnpkg.com/en/)
You could use `npm` in place of `yarn`. yarn is just faster and the lock file is specific to yarn.

## Development

The following command spins up a web server at [http://localhost:8080](http://localhost:8080) using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) using a development friendly configuration in the `webpack.dev.js` file. Reload will happen on file change.

```sh
yarn run dev
```

## Tests
Tests are sparse right now and written using [Jest](https://facebook.github.io/jest/). The test command will also run the code through a linter using the [javascript standard style](https://standardjs.com/) rules to minimize configuration.

```sh
yarn test
```

## Build
This command will build the HTML, CSS and JS files in production mode. The output files are minimized and include a hash in the file name specific to the build to prevent caching when a new version is available.

```sh
yarn build
```


## Deploy
Runs the tests, build and then uploads to an S3 bucket with [s3-deploy](https://www.npmjs.com/package/s3-deploy).
```sh
yarn deploy
```

## Other Dependencies

* [axios](https://github.com/axios/axios) HTTP request library.
* [numeral](numeraljs.com) Library for formatting numbers, such as `1` to `1st` and `1000` to `1,000`.
* [normalizr](https://github.com/paularmstrong/normalizr) Popular normalizing tool for processing API requests in to normalized data before storing in redux.
* [redux-thunk](https://github.com/gaearon/redux-thunk) Simple middleware to do async redux actions, perfect for API requests.
