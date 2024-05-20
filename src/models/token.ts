import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

interface TokenModelAttributes {
  ranking: number;
  tokenAddress: string;
  expiredAt: Date;
}

class TokenModel extends Model<TokenModelAttributes> implements TokenModelAttributes {
  public ranking!: number;
  public tokenAddress!: string;
  public expiredAt!: Date;
}

TokenModel.init(
  {
    ranking: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tokenAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'tokens',
  }
);

export default TokenModel;