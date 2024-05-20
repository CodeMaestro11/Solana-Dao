import { Telegraf } from "telegraf";

export const helpCommand = (bot: Telegraf) => {
    bot.help((ctx) => ctx.reply('Use /buy <token_address> <duration_hours> <pay address> to promote your token.'));
}