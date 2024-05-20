"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCommand = void 0;
const startCommand = (bot) => {
    bot.start((ctx) => ctx.reply('Welcome to Solana Token Alerts Bot!'));
};
exports.startCommand = startCommand;
