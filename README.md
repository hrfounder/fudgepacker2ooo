## Developing

Install NodeJS and git for your platform then

```bash
git clone https://github.com/hrfounder/fudgepacker2ooo.git

```

CD into the project

```bash
cd ./fudgepacker2ooo

```

Once you've cloned the project and installed dependencies with `yarn` (or `pnpm install` or `npm install`), start a development server:

```bash

#make sure you have yarn
yarn  dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
yarn build
```

> You can preview the built app with `yarn preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
