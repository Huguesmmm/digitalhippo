"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var auth_router_1 = require("./auth-router");
var trpc_1 = require("./trpc");
exports.appRouter = (0, trpc_1.router)({
    auth: auth_router_1.authRouter
});
