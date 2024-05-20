import BOT from "./config/bot";
import router from "./routes";

router(BOT);

(async () => {
    await BOT.launch();
    console.log('Bot is running');
})();

