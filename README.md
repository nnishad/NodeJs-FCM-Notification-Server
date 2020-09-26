# NodeJs-FCM-Notification-Server

[![N|Solid](https://alamgirqazi.github.io/tech-blog/static/a717eafa290bf333c4dd1c86076c5b9e/f570d/node-js.png)](https://nodejs.org/en/)
[![N|Solid](https://miro.medium.com/max/1024/1*xP2U5u21teQMEZ7NFzC-Hw.png)](https://nodejs.org/en/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

NodeJs Express Server connected with Firebase Admin Service Account and Firebase Cloud Messaging (FCM) service having Rest APIs- .

  - Subscribe Token to topic (POST:/notify/subscribe)
  - Unsubscribe Toekn from topic (POST:/notify/unsubscribe)
  - Send notification to topic (POST:/notify/)
  - 
### How FCM works

[![](https://miro.medium.com/max/3958/1*SLf-ZmDcc76WE5u8mutGYg.png)](https://miro.medium.com/max/3958/1*SLf-ZmDcc76WE5u8mutGYg.png)

### Installation

NodeJs-FCM-Notification-Server requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies start the server.

```sh
$ cd NodeJs-FCM-Notification-Server
$ npm install -d
$ npm start
```
To start server and use it.
```sh
$ npm start
```
Then browse to http://localhost:3000

### Development

Want to contribute? Great!

Clone this [repo](https://github.com/nnishad/NodeJs-FCM-Notification-Server), start server using nodemon and do required changes.

Put pull request to sucessfully make your contribution.

### Deployment to Google App Engine
Update `app.yaml` present in root directory according to your server requirements like your server need flexible or standard enviroment to run smoothly on-the-go.
Detailed documentation about `app.yaml` [Google Documentation](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref).

You need to install gcloud command-line tool from official gcloud website to deploy this app to App engine.

```sh
cd NodeJs-FCM-Notification-Server
gcloud init
gcloud deploy app
```
After successfull deployment, you will get a server address to access it.

### Todos

 - Write MORE APIs for customised in notification
 - Improved security to APIs 

License
----

MIT


**Free Software, Hell Yeah!**
