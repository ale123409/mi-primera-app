// routes/route2.js
const express = require('express');
const router = express.Router();
const logDateAndMessage = require('../middlewares/logDateAndMessage');

router.use(logDateAndMessage('Entraste a la Ruta 2'));

router.get('/', (req, res) => {
    res.send('Estás en Ruta 2');
});

module.exports = router;
