import TokenModel from "../models/token";
import { Op } from "sequelize";

export const findAllTokens = async (): Promise<TokenModel[]> => {
    const rankings = await TokenModel.findAll();
    return rankings;
}

export const checkExpiredTokens = async (): Promise<void> => {
    const now = new Date();

    await TokenModel.destroy({
        where: {
            expiredAt: {
                [Op.lt]: now,
            },
        },
    });
}

export const saveToken = async (
    ranking: number, 
    expireDuration: 3|6|12, 
    tokenAddress: string
): Promise<boolean> => {
    const now = new Date();
    const expiredDate = new Date(now.getTime() + expireDuration * 3600 * 1000);

    const existingToken = await TokenModel.findOne({ where: { ranking } });

    if (existingToken) {
        const existingExpiredDate = new Date(existingToken.expiredAt);
        if (existingExpiredDate > now) {
            return false;
        }
    }

    await TokenModel.upsert({ ranking, tokenAddress, expiredAt: expiredDate });

    return true;
}