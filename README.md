# Rpsgame Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

# Install in Docker

docker build -t wittman26/rpsgame-front:latest .
docker run -d -p 49169:80 wittman26/rpsgame-front:latest

## Important!!

This application was built with **Node 14.18.1**; use this Node version to install dependencies before running. You can use **nvm** [NVM node versioner](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.8) to install and use different versions of Node in a machine.
After installing **nvm** Use this commands to use the right version with nvm:

Installing Node 14.18.1
```
nvm install 14.18.1
```

Using Node 14.18.1

```
nvm use 14.18.1
```

Check node versions installed

```
nvm list
```

### Installing dependencies
Before running development server, dependencies must be installed using this command

```
npm i
```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Configuration file

This application calls an API Rest which uses an endpoint that can be configured in the following file:
`/rpsgame-front/src/environments/environment.ts`

By default, this file is configured with this values:
```conf
  rpsgameback: 'http://localhost:9191/rpsgame/api'
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
