# Quiz

## Overview

This project is a site for surveying potential customers.
This is a Next.js project bootstrapped with create-next-app.

### Prerequisites

- [Git](https://github.com/git-guides/install-git) Install the latest version.
- [Node.js](https://nodejs.org/en/download/) Install version 18.18 or later.

**Recommended**

- [NVM](https://github.com/nvm-sh/nvm) / [NVM for Windows](https://github.com/coreybutler/nvm-windows)
  For easy switching the node version.
- [Yarn](https://yarnpkg.com/getting-started/install) A faster NPM alternative

## Installation

To install the project dependencies run

```sh
yarn
# or
npm install
```

## Development

To start development first, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


Code quality checks are included in the project (Prettier, Eslint).
Staged code will be checked on commit via git commit hooks but can be started at any time with:

```sh
yarn lint
```

Smaller fixes can be applied automatically with

```sh
yarn lint:fix
```

## Building

To build the project run

```sh
yarn build
```

The built project will be available in the folder `.next`
