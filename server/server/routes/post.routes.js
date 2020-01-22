"use strict";
exports.__esModule = true;
var hello_1 = require("./post/hello");
exports["default"] = (function (app) {
    app.post("/hello-world", function (req, res) { return hello_1["default"](req, res); });
});
