"use strict";
exports.__esModule = true;
var hello_1 = require("./get/hello");
exports["default"] = (function (app) {
    app.get("/hello", function (req, res) { return hello_1["default"](req, res); });
});
