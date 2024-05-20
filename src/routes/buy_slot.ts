import { Context, Telegraf } from "telegraf";

export const buy_slot = (bot: Telegraf) => {
    bot.command("buy_slot", (ctx: Context) => {
        if (!ctx.message || !('text' in ctx.message)) {
            return ctx.reply('Invalid command format.');
        }
        const message = ctx.message.text.split(' ');
    });
}