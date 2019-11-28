# PROJECT BRICKHOUSE WEBSITE

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/ShotaTogawa/Brickhouse-shcool-project.git
    $ cd Brickhouse-shcool-project
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ npm install

---

## Languages & tools


### JavaScript

- [React](http://facebook.github.io/react) is used for UI with [es6 syntax](http://es6.github.io/)

### SASS

- [node-sass](https://github.com/sass/node-sass) is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

### Dependencies

- [rehooks / window-scroll-position @rehooks/window-scroll-position](https://github.com/rehooks/window-scroll-position)
^ 1.0.1

- [sass / node-sass](https://github.com/sass/node-sass)
^ 4.13.0

- [facebook / react](https://github.com/facebook/react)
^ 16.12.0

- [facebook / react react-dom](https://github.com/facebook/react)
^ 16.12.0

- [ReactTraining / react-media](https://github.com/ReactTraining/react-media)
^ 1.10.0

- [ReactTraining / react-router react-router-dom](https://github.com/ReactTraining/react-router)
^ 5.1.2

- [facebook / create-react-app react-scripts](https://github.com/facebook/create-react-app)


---

## Authors

* **Team Shihomi**

See also the list of [contributors](https://github.com/ShotaTogawa/Brickhouse-shcool-project/graphs/contributors) who participated in this project.

