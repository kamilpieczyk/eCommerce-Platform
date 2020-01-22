"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var post_routes_1 = require("./routes/post.routes");
var get_routes_1 = require("./routes/get.routes");
var app = express();
var Server = /** @class */ (function () {
    function Server() {
        this.init();
        this.middleware();
        this.routes();
    }
    Server.prototype.init = function () {
        var port = "3030";
        app.listen(port, function () {
            console.log("app listen on port " + port);
        });
    };
    Server.prototype.middleware = function () {
        app.use(bodyparser.json());
    };
    Server.prototype.routes = function () {
        get_routes_1["default"](app);
        post_routes_1["default"](app);
    };
    return Server;
}());
new Server();
