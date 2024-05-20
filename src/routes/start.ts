import { Context, Telegraf } from "telegraf";

export const startCommand = (bot: Telegraf) => {
    bot.start((ctx: Context) => {
        ctx.reply('Welcome to Solana Token Alerts Bot!');
        if (ctx.chat?.id) {
        }
    });
}