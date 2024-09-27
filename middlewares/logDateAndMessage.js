// middlewares/logDateAndMessage.js
module.exports = (message) => {
    return (req, res, next) => {
        const date = new Date();
        console.log(`Fecha y hora: ${date.toISOString()}`);
        console.log(`Mensaje: ${message}`);
        next();
    };
};
