var q = 'bourse-queue';

var open = require('amqplib').connect('amqp://localhost')

open.then(function (conn) {
    return conn.createChannel();
}).then(function (ch) {
    return ch.assertQueue(q).then(function () {
        return ch.consume(q, function (msg) {
            if (msg !== null) {
                require('../app').io.emit("message", msg.content.toString());
                ch.ack(msg);
            }
        });
    });
}).catch(console.warn);