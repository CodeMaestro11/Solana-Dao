"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const bot = new telegraf_1.Telegraf("7198579069:AAFA2QEVrO2yaya7P7N71uYnKxkyQqXFmMw");
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.command('buy', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the token address and duration from user input
    const tokenAddress = ctx.message.text.split(' ')[1];
    const durationHours = parseInt(ctx.message.text.split(' ')[2]);
    // Implement logic to buy the token and track its rank
    // (e.g., interact with Solana DEXs)
    // Respond to the user
    ctx.reply(`Purchased ${tokenAddress} for ${durationHours} hours.`);
}));
bot.command('alert', (ctx) => {
    const message = '🚀 New token alert: SOL is trending!';
    ctx.telegram.sendMessage('@SolanaTokenAlertsChannel2024', message);
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
