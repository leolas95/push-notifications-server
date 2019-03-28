const express = require('express');
const app = express();
const fcm = require('./fcm');

app.use(express.json());

app.post('/push_notification', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.image_url;

    console.log('title =', title);
    console.log('desrip =', description);
    console.log('url =', imageUrl);

    fcm.sendPushNotification({
        title: title,
        description: description,
        image_url: imageUrl
    }, function(err, result) {
        if (err) {
            console.log('ERROR: Could not send push notification:', err);
            return res.status(500).json({'message': 'Could not send push notification', error: err});
        }

        res.status(200).json({ result: result });
    });
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))