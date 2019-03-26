const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

const registrationToken = 'cddkRf4UKNk:APA91bFczVQ7ETw42BfE0vtbMoAdYdn2i3ug54jz-LrPFyA1Aa7_jC4BMllRaBw8gSFZNTltVN38xmbzymesITHxcqUTYm0rso4dC3HSR27iPGIeNqauneIFEBLuxxGo87DbMYy4z2nV'

function sendPushNotification(data) {
    const notification = {
        token: registrationToken,
        data: data
    }

    admin.messaging().send(notification)
        .then((response) => {
            console.log('Succesfully sent message:', response);
        })
        .catch((err) => {
            console.log('Error sending message:', err);
        });
}

module.exports.sendPushNotification = sendPushNotification;