# react-native-node
An example app 

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MySQL - [Download & Install MySQL](https://www.mysql.com/downloads)

## Running backend server
Please check mysql username and password under `./server/config/config.json` and `./server/scripts/createDb.js`.
```
cd react-native-node
cd server
npm install
npm run db:migrate
npm start
```

## Install and run on android
```
npm i -g expo-cli
cd react-native-node
npm install
npm run android
```

## Install and run on ios
```
npm i -g expo-cli
cd react-native-node
npm install
npm run ios
```
