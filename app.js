const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp(
    credential: admin.credential.cert(serviceAccount),
)

const registrationToken = ''

const message = {
    data: {
        name: 'Leonardo'
    },
    token: registrationToken
}

admin.messaging().send(message)
.then((response) => {
    console.log('Succesfully sent message:', response);
})
.catch((err) => {
    console.log('Error sending message:', err);
});