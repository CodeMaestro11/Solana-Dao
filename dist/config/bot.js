"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const BOT = new telegraf_1.Telegraf(config_1.BOT_TOKEN);
exports.default = BOT;
