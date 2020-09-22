var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-first-react-admin.firebaseio.com"
});

router.post('/subscribe', function (req, res, next) {
    if (req.body.token == null || req.body.topic == null) {
        res.status(400);
        res.send("Bad data provided.");
    }
    admin.messaging().subscribeToTopic(req.body.token, req.body.topic)
        .then(function (response) {
            console.log("Successfully subscribed to topic:", response);
            res.status(200);
            res.send("subscribed");
        })
        .catch(function (error) {
            console.log("Error subscribing to topic:", error);
            res.status(500);
            res.send(error);
        });
});


router.post('/unsubscribe', function (req, res, next) {
    if (req.body.token == null || req.body.topic == null) {
        res.status(400);
        res.send("Bad data provided.");
    }
    admin.messaging().unsubscribeFromTopic(req.body.token, req.body.topic)
        .then(function (response) {
            console.log("Successfully unsubscribed to topic:", response);
            res.status(200);
            res.send("unsubscribed");
        })
        .catch(function (error) {
            console.log("Error subscribing to topic:", error);
            res.status(500);
            res.send(error);
        });
});


router.post('/', function (req, res, next) {
    if (req.body.topic == null || req.body.notifyTitle == null || req.body.notifyBody == null) {
        res.status(400);
        res.send("Bad data provided.");
    }
    var message = {
        notification: {
            title: req.body.notifyTitle,
            body: req.body.notifyBody
        },
    };
    admin.messaging().sendToTopic(req.body.topic, message)
        .then(function (response) {
            console.log("Successfully sent message:", response);
            res.status(200);
            res.send("Notified");
        })
        .catch(function (error) {
            console.log("Error sending message:", error);
            res.status(500);
            res.send(error);
        });
});


module.exports = router;
