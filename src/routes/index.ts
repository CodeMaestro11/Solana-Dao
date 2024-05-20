import { Telegraf } from "telegraf"

import { fetchTopVolumeTokens } from "../utils";
import { startCommand } from "./start";
import { helpCommand } from "./help";
import { buy_slot } from "./buy_slot";
import { buy_token } from "./buy_token";
import { CHANNEL } from "../config/config";

const router = (bot: Telegraf) => {
    startCommand(bot);
    helpCommand(bot);
    buy_slot(bot);
    buy_token(bot);

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
    
        bot.telegram.sendMessage(CHANNEL, message, { parse_mode: 'Markdown' });
    }
    
    setInterval(sendAlerts, 10000);

}

export default router;