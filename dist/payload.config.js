"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_vite_1 = require("@payloadcms/bundler-vite");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var Users_1 = require("./collections/Users");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users_1.Users],
    routes: {
        admin: '/sell',
    },
    admin: {
        user: "users",
        bundler: (0, bundler_vite_1.viteBundler)(),
        meta: {
            titleSuffix: "- DigitalHippo",
            favicon: "/favicon.ico",
            ogImage: "/thumbnail.jpg"
        }
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts")
    }
});
