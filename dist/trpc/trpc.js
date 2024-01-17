"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
var server_1 = require("@trpc/server");
//initialising trpc and creating a router
var t = server_1.initTRPC.context().create();
exports.router = t.router;
exports.publicProcedure = t.procedure;
