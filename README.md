# Starklings App

A web interactive tutorial to start learning Cairo and Starknet.

## Backend

Within `api` directory run:

```bash
cd api/
npm i
npm run dev
```

You should see something like this:

```sh
> starklings-api@1.0.0 dev
> nodemon --env-file .env src/index.js

[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node --env-file .env src/index.js`
Server on port 3000
```

## Frontend

Within `client` directory run:

```bash
cd client/
npm i
npm run start
```

You should see something like this:

```sh
Compiled successfully!

You can now view starklings-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.175:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
Files successfully emitted, waiting for typecheck results...
Issues checking in progress...
No issues found.
```