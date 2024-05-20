import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

interface WalletModelAttributes {
  id: number;
  publicKey: string;
  secretKey: string;
}

class WalletModel extends Model<WalletModelAttributes> implements WalletModelAttributes {
  public id!: number;
  public publicKey!: string;
  public secretKey!: string;
}

WalletModel.init(
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
    },
    publicKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secretKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: 'wallets',
  }
);

export default WalletModel;