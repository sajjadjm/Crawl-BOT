const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.send(200, 'OK');

});

module.exports = router;