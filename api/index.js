const server = require()
const { conn } = require()
require('dotenv').config();

conn.sync({ force: true }).then(() => {
    server.listen(process.env.PORT, () => {
        console.log('linstening at', process.env.PORT)
    });
});