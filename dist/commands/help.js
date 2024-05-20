"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpCommand = void 0;
const helpCommand = (bot) => {
    bot.help((ctx) => ctx.reply('Use /buy <token_address> <duration_hours> <pay address> to promote your token.'));
};
exports.helpCommand = helpCommand;
