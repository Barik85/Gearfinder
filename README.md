# gearfinder

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.11.1

    $ npm --version
    6.1.0

## Install

    $ git clone
    $ cd gearfinder
    $ npm install

## Start & watch

    $ npm start
    Runs the app in the development mode.<br>


## Build for production

## Android
    put my-upload-key.keystore file into android/app/

    $ cd android
    creart App Bundle (.aab file)
    $ ./gradlew bundleRelease
    you can find created file in android/app/build/outputs/bundle/release

    create Apk file
    $ ./gradlew assembleRelease
    find file android/app/build/outputs/apk/release

##### What's Being Used?

* [React](http://facebook.github.io/react/) for managing the presentation logic of your application.
* [WebPack](http://webpack.github.io/) for bundling code down to a single file and enabling hot module reloading.

## Running Tests

### `npm run test -- --watch` - runs tests in watch mode (restarting tests after file changing)
### `npm run test -- --coverage` - runs tests with table of code coverage

### Commiting

Project use precommit hooks with [husky](https://github.com/typicode/husky)
Hooks configurated in package.json.
To skip it you have to use command
## `git commit --no-verify`.
