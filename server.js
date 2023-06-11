require('module-alias/register')
const { Config } = require('./config')

const { PORT } = Config.APPLICATION;

const app = require('./src')

const onLisningLog = `Taskbot service running on port ${PORT} !!!`;

const onLisning = () => console.log(onLisningLog);

const server = app.listen(PORT, onLisning());
server.timeout = 1000 * 60 * 60;

module.exports = app;

