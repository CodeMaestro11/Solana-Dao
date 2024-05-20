import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './config';

const BOT = new Telegraf(BOT_TOKEN);

export default BOT;