import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { findWallet } from "../controllers/walletController";
import { confirmTransaction } from "../services/solana";
import bs58 from "bs58";
import { initiateSwap, swapToken } from "../features/swap";

export const buy = async (
    tokenAddress: string, 
    amount: number, 
    chatId: number
): Promise<boolean> => {
    const wallet = await findWallet(chatId);
    if (wallet === null) {
        console.log("wallet not found");
        return false;
    }

    const payer = Keypair.fromSecretKey(bs58.decode(wallet.secretKey));
    let txid, quoteResponse;

    try {
        const res = await initiateSwap(
            tokenAddress,
            amount,
            payer,
        );
        quoteResponse = res.quoteResponse;
        txid = await swapToken(res.swapTransaction, payer);
        await confirmTransaction(txid);

    } catch {
        return false;
    }

    return true
};