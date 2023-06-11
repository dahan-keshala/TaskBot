const dotEnv = require('dotenv');

dotEnv.config();

const APPLICATION = {

    PORT: process.env.PORT

}

module.exports = {

    APPLICATION

}