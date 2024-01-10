# concorde-webapp

## Turborepo starter

This project is powered by Turborepo. Learn how to use and navigate CH at the bottom of these instructions (from the section Working with Turborepo)


## Running the project in dev mode

Install dependencies via:

```sh
yarn
```

and then run:

```sh
yarn dev
```

The admin application located at apps/admin will run on port 3001, as specified in that sections package.json file

## Running the project in build mode (per app)


Install dependencies via:

```sh
yarn
```

Navigate to the given partial repo (in our case apps/admin) and do a:


```sh
yarn build
```

after build completes, simply run:

```sh
yarn start
```

## Deployment process

Everything on the FE side is deployed via Vercel (https://vercel.com/concorde-health)

There is a CI/CD process setup via github actions + vercel deployment

Steps for the github actions can be found in the repo root, simply checkout:

```sh
.github/workflows/prebuild.yml
```

Currently, there are 3 environments:

- [Dev](https://admin.dev.myconcordehealth.net/dashboard)
- [Stage](https://admin.stage.myconcordehealth.net/dashboard)
- [UAT](https://admin.uat.myconcordehealth.net/dashboard)

which are triggered to deploy the latest version by merging to their respected branches - [develop, stage, uat]


## Project structure

The project is consisted of two main entities:

```sh
1. apps folder - where the partial repos are located (e.g. admin)
2. packages folder - where app wide packages are located (e.g. components library)
```
    
To add a new app/package, follow the blueprint of the official docs here https://turbo.build/repo/docs/getting-started/create-new



## Working with Turborepo

In general, to create a turborepo project, use:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
