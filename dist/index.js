"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const bodyParser = require("body-parser");
const cors = require("cors");
const login_1 = __importDefault(require("./routes/login"));
const users_1 = __importDefault(require("./routes/users"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const config_1 = __importDefault(require("./config/config"));
const server = server_1.default.init(config_1.default.port);
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use(cors());
server.app.use(login_1.default);
server.app.use(users_1.default);
server.start(() => {
    console.log(`Server running on port ${server.port}`);
});
