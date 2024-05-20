import { Telegraf } from 'telegraf';
import axios from 'axios';

const bot = new Telegraf("7198579069:AAFA2QEVrO2yaya7P7N71uYnKxkyQqXFmMw");

bot.start((ctx) => ctx.reply('Welcome to Solana Token Alerts Bot!'));
bot.help((ctx) => ctx.reply('Use /buy <token_address> <duration_hours> <pay address> to promote your token.'));

bot.command('buy', async (ctx) => {
    const [command, tokenAddress, duration, pay_addr] = ctx.message.text.split(' ');
    const durationHours = parseInt(duration);

    if (!tokenAddress || isNaN(durationHours)) {
        return ctx.reply('Invalid format. Use /buy <token_address> <duration_hours>.');
    }

    // Implement logic to purchase the slot for the token
    const slotResult = await purchaseSlot(tokenAddress, durationHours, );

    if (slotResult.success) {
        ctx.reply(`Successfully purchased slot for token ${tokenAddress} for ${durationHours} hours.`);
        // Optionally, notify the channel
        ctx.telegram.sendMessage('@SolanaTokenAlertsChannel2024', `Token ${tokenAddress} is promoted for ${durationHours} hours!`);
    } else {
        ctx.reply(`Failed to purchase slot for token ${tokenAddress}.`);
    }
});

async function sendAlerts() {
    const topVolumeTokens = await fetchTopVolumeTokens();
    let message = 'Current Top Volume Tokens:\n\n';
    const rank_emoticons = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']

    if (topVolumeTokens) {
        topVolumeTokens.forEach((token, index) => {
            message += `*${rank_emoticons[index]} ${token.name ? token.name : 'Anonymous token'}* \n🏷️ \`${token.address}\`\n\n`;
        });
    } else {
        message = 'No data available.';
    }

    bot.telegram.sendMessage('@SolanaTokenAlertsChannel2024', message, { parse_mode: 'Markdown' });
}

// Send alerts every 10 seconds
setInterval(sendAlerts, 10000);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

type TokenInfo = {
    address: string;
    rank: number;
    name: string;
    logo: string;
    createdAt: string;
};

async function fetchTopVolumeTokens(): Promise<TokenInfo[]> {
    try {
        const response = await axios.get('https://api.solanatracker.io/tokens/volume');
        //https://api.dexscreener.com/latest/dex/tokens/volume/solana
        return response.data.slice(0, 10);
    } catch (error) {
        console.error('Error fetching top volume tokens:', error);
        return [];
    }
}

async function purchaseSlot(tokenAddress: string, durationHours: number): Promise<{ success: boolean }> {
    try {
        // Add logic to interact with your backend or directly with Solana blockchain to purchase slot
        // This is a placeholder implementation
        console.log(`Purchasing slot for ${tokenAddress} for ${durationHours} hours.`);
        return { success: true };
    } catch (error) {
        console.error('Error purchasing slot:', error);
        return { success: false };
    }
}