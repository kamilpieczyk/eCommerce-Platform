"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res) {
    var hello = req.body.hello;
    console.log(hello);
    var status;
    var response;
    if (hello) {
        status = 200;
        response = hello;
    }
    else {
        status = 404;
        response = "no message recived";
    }
    res.status(status);
    res.json({
        status: status,
        response: response
    });
});
