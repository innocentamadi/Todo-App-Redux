[![CircleCI](https://circleci.com/gh/innocentamadi/Todo-App-Redux.svg?style=shield&circle-token=14359bf91c4c7c5cece5c5f885a55d5632f12477)](https://circleci.com/gh/innocentamadi/Todo-App-Redux)
[![Coverage Status](https://coveralls.io/repos/github/innocentamadi/Todo-App-Redux/badge.svg?branch=master&t=ne9um1)](https://coveralls.io/github/innocentamadi/Todo-App-Redux?branch=master)
# Todo App

This is a basic Todo App built with React and Redux

![alt Demo](./public/demo.gif?raw=true)

Deployed [Here](http://cent-todo-app.herokuapp.com)

## Available Scripts
version: 2.1
orbs:
  node: circleci/node@3.0.0
jobs:
  build:
    docker:
      - image: circleci/node:10
    working_directory: ~/repo
    steps:
      - checkout

      # Download and cache dependencies
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            # fallback to using the latest cache if no exact match is found
            - v1-dependencies-

      - run:
          name: Install dependencies
          command: |
            yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

      - run:
          name: Run code linter
          command: |
            yarn lint

      - run:
          name: Run flow check
          command: |
            yarn flow:check

      # I'll get back to enforcing this later
      # - run:
      #     name: Run flow coverage
      #     command: |
      #       yarn flow:report

      - run:
          name: Run test suite and generate coverage
          command: |
            yarn test -u --coverage --maxWorkers 2

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.