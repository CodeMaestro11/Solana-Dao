"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("./config/bot"));
const commands_1 = __importDefault(require("./commands"));
(0, commands_1.default)(bot_1.default);
