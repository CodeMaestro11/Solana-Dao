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
const utils_1 = require("../utils");
const start_1 = require("./start");
const help_1 = require("./help");
const buy_slot_1 = require("./buy_slot");
const buy_token_1 = require("./buy_token");
const config_1 = require("../config/config");
const router = (bot) => {
    (0, start_1.startCommand)(bot);
    (0, help_1.helpCommand)(bot);
    (0, buy_slot_1.buy_slot)(bot);
    (0, buy_token_1.buy_token)(bot);
    function sendAlerts() {
        return __awaiter(this, void 0, void 0, function* () {
            const topVolumeTokens = yield (0, utils_1.fetchTopVolumeTokens)();
            let message = 'Current Top Volume Tokens:\n\n';
            const rank_emoticons = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
            if (topVolumeTokens) {
                topVolumeTokens.forEach((token, index) => {
                    message += `*${rank_emoticons[index]} ${token.name ? token.name : 'Anonymous token'}* \n🏷️ \`${token.address}\`\n\n`;
                });
            }
            else {
                message = 'No data available.';
            }
            bot.telegram.sendMessage(config_1.CHANNEL, message, { parse_mode: 'Markdown' });
        });
    }
    setInterval(sendAlerts, 10000);
};
exports.default = router;
