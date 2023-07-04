# Evergreen Federation with Next.js

This is an example of an evergreen approach with Next.js 13 and module-federation v7

## Start

Build and start the toolkit server:

```sh
cd toolkit && yarn && yarn build && yarn serve
```

Toolkit server will be available at <http://localhost:3000>

Build and start the NextJS app:

```sh
cd app-next-13 && yarn && yarn build && yarn dev
```

App will be available at <http://localhost:3001>
