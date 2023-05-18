const express = require('express')();

express.listen(3000, () => console.log('server running'));

express.get('/dudu', (req, res) => {
    res.send('nodeJS');
})