import WalletModel from "../models/wallet";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export const createWallet = async (id: number): Promise<WalletModel|null> => {
    try {
        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const secretKey = bs58.encode(keypair.secretKey);
        const wallet = await WalletModel.create({
            id,
            publicKey,
            secretKey,
        })
        return wallet;
    } catch {
        return null;
    }
}

export const findWallet = async (id: number): Promise<WalletModel|null> => {
    try {
        const wallet = await WalletModel.findOne({
            where: {
                id,
            }
        });

        return wallet ? wallet : null;
    } catch {
        return null;
    }
}