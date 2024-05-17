import { Telegraf } from 'telegraf';

const bot = new Telegraf("7198579069:AAFA2QEVrO2yaya7P7N71uYnKxkyQqXFmMw");

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('buy', async (ctx) => {
    // Get the token address and duration from user input
    const tokenAddress = ctx.message.text.split(' ')[1];
    const durationHours = parseInt(ctx.message.text.split(' ')[2]);
  
    // Implement logic to buy the token and track its rank
    // (e.g., interact with Solana DEXs)
  
    // Respond to the user
    ctx.reply(`Purchased ${tokenAddress} for ${durationHours} hours.`);
});

bot.command('alert', (ctx) => {
    const message = '🚀 New token alert: SOL is trending!';
    ctx.telegram.sendMessage('@SolanaTokenAlertsChannel2024', message);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
