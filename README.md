 # Boilerplate for Next JS with Redux, Material UI, Tailwind CSS, and PWA.
 
 ### Follow my blog to set up this repository.
 
## Pre-requisites
1) If you don't plan to use docker to run this app, you need __Node (version 10 or higher) and NPM__.
2) If you are using docker, you need to have docker installed and running in your machine.
 
## Installation
***
You can run this app  with docker or without docker. First, clone this repository. Replace "folder_name" with whatever you want.
```
$ git clone https://github.com/akarX23/react-redux-next-tailwind-pwa-template.git folder_name
$ cd folder_name
```

### Running with docker
```
$ sudo docker build -t image_name .
```
It will take some time to build the docker image. Once it's complete you can run the following command and specify a port to run the app. We will be using port 5000.
```
docker run -dp 5000:3000 image_name
```
This will run the app in *detached* mode, which means you don't need to keep your terminal open to access the app.
Once it's up and running, you can access the app on [http://localhost:5000](http://localhost:5000)

### Running without docker
```
$ npm install
$ npm run dev
```
This will run the development server on port 3000. You can access the app on [http://localhost:3000](http://localhost:3000). Any changes you make in the app will be visible on the site with hot-reload.

## The pre-defined Custom Theme

The theme for this project is defined in two files:
* `/tailwind.config.js`
* `/helpers/theme.js`

The first theme is for __*Tailwind*__. The second theme is for __*Material UI*__.
__It's advised to keep the theme consistent throughout the app. Make sure in both the places the values are same.__

### Disabling PWA and service worker:
By default the service worker is enabled. If you don't want your app to be a PWA go to `/next.config.js` and set `register : false`. Restart your app to see the changes.

## Salient features of this app:
1) It has a global theme for the app. Gives a lot more consistency and theme can be changed for different color palettes.
2) Redux is configured with Next JS and a sample action and reducer is already made.
3) If you have kept PWA enabled, the app will work offline and can be installed on any device.

## Thank you for cloning this project. If you want to make any changes please make a separate branch and make a PR. If you face any issues, you can raise them in the issues sections.

Ritik Agrawal.
