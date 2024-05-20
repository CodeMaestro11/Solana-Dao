import bs58 from "bs58";
import { Wallet } from "@coral-xyz/anchor";
import { connection } from "../config/connection";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, RpcResponseAndContext, SignatureResult } from "@solana/web3.js";

export const getWallet = (secretKey: string): Wallet => {
    return new Wallet(Keypair.fromSecretKey(bs58.decode(secretKey)));
};

export const getBalance = async (walletAddress: string): Promise<number> => {
    const publicKey = new PublicKey(walletAddress);
    const res = await connection.getBalance(publicKey);

    return (1.0 * res) / LAMPORTS_PER_SOL;
};

export const confirmTransaction = async (
    txid: string
): Promise<RpcResponseAndContext<SignatureResult>> => {
    const res = await connection.confirmTransaction(txid);
    if (res.value.err) {
      throw new Error(res.value.err.toString());
    }

    return res;
};