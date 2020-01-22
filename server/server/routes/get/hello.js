"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res) {
    var status = 200;
    res.status(status);
    res.json({
        status: status,
        response: "HELLO WORLD"
    });
});
