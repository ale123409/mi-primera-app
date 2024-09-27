// routes/route1.js
const express = require('express');
const router = express.Router();
const logDateAndMessage = require('../middlewares/logDateAndMessage');

router.use(logDateAndMessage('Entraste a la Ruta 1'));

router.get('/', (req, res) => {
    res.send('Estás en Ruta 1');
});

module.exports = router;
