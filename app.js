const express = require('express');
const app = express();
const fcm = require('./fcm');


app.get('/', (req, res) => {
    fcm.sendPushNotification({
        title: 'Se ha generado una alerta',
        description: 'Se ha detectado un objeto buscado para el que se establecieron condiciones',
        image_url: 'https://www.spirit-of-metal.com/les%20goupes/O/Opeth/pics/359786_logo.jpg'
    });
    res.sendStatus(200);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))