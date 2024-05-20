import axios from "axios";
import { TokenInfo } from "./types";
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { connection } from "./config/connection";

export const fetchTopVolumeTokens = async (): Promise<TokenInfo[]> => {
    try {
        const response = await axios.get('https://api.solanatracker.io/tokens/volume');
        //https://api.dexscreener.com/latest/dex/tokens/volume/solana
        return response.data.slice(0, 10);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching top volume tokens:', error.message);
            return [];
        } else {
            console.error('Transaction failed: An unknown error occurred.');
            return [];
        }
    }
}
