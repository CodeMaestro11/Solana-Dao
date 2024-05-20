import { Context, Telegraf } from "telegraf";
import { connection } from "../config/connection";
import { PublicKey, Transaction } from "@solana/web3.js";
import { buy } from "../events/buy";


export const buy_token = (bot: Telegraf) => {
    bot.command("buy_token", async (ctx) => {
        const messageParts = ctx.message.text.split(' ');
        if (messageParts.length < 3) {
            ctx.reply('Usage: /buy_token <token_address> <amount>');
            return;
        }

        const token_address = messageParts[1];
        const amount = parseFloat(messageParts[2]);

        await buy(token_address, amount, ctx.message.chat.id);
    });
}