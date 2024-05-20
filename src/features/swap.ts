import { getQuote, getSwapTransaction } from "../services/jupiter";
import { Keypair, Transaction } from "@solana/web3.js";
import { connection } from "../config/connection";


export const signTransaction = (swapTransaction: string, payer: Keypair) => {
    const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
    const transaction = Transaction.from(swapTransactionBuf);
    transaction.sign(payer);

    return transaction;
};

export const executeTransaction = async (transaction: Transaction) => {
    const rawTransaction = transaction.serialize();
    const txid = await connection.sendRawTransaction(rawTransaction, {
        skipPreflight: true,
        maxRetries: 2,
    });

    return txid;
};

export const initiateSwap = async (outputMint: string, amount: number, payer: Keypair) => {
    const quoteResponse = await getQuote(
        "So11111111111111111111111111111111111111112",
        outputMint,
        amount,
    );

    if (quoteResponse.error) {
        throw new Error(quoteResponse.error);
    }

    const { swapTransaction } = await getSwapTransaction({
        quoteResponse,
        payer,
    });

    return {
        quoteResponse,
        swapTransaction,
    };
};

export const swapToken = async (swapTransaction: string, payer: Keypair) => {
    const transaction = signTransaction(swapTransaction, payer);
    return executeTransaction(transaction);
};
