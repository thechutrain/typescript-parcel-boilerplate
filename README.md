> A boilerplate for deploying quick typescript apps with testing

[![style: prettier](https://img.shields.io/badge/style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tests](https://img.shields.io/badge/tests-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

Make sure you have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed first.

You can install the package locally for a single project:

```bash
$ git clone git@github.com:thechutrain/typescript-parcel-boilerplate.git
$ cd typescript-parcel-boilerplate
$ npm i
$ npm run start
```

## Features

- hot module reloading (thanks to parcel-bundler)

## Built with

- parcel
- Jest
- TSlint & AirBnb style guide
- surge

## Recommended VS Code config:
```
{
	"eslint.enable": false,
	"tslint.configFile": "tslint.json",
	"tslint.enable": false,
	"tslint.autoFixOnSave": false,
	"tslint.run": "onSave",
	"editor.formatOnSave": false,
	"jest.pathToJest": "npm run test --"
}

```