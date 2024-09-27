// routes/route3.js
const express = require('express');
const router = express.Router();

// No se aplica el middleware aquí, por lo tanto no se imprime nada en la consola.
router.get('/', (req, res) => {
    res.send('Estás en Ruta 3');
});

module.exports = router;
