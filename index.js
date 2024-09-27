const express = require('express');
const app = express();

const route1 = require('./routes/route1');
const route2 = require('./routes/route2');
const route3 = require('./routes/route3');

app.use('/route1', route1);
app.use('/route2', route2);
app.use('/route3', route3);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
