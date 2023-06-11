const initRoute = (message) => (req, res) => {
    res.status(200).json({
        message: message,
    });
};

const _404 = (req, res) => {
    res.status(404).json({
        code: 404,
        message: 'NOT FOUND',
        success: false,
        error: {
            errmsg: 'Route' + req.url + 'Not found',
            code: 404
        }
    });
};

module.exports = { initRoute, _404 }