import { DataTypes, Model } from 'sequelize';
import db from '.';

class SellersModel extends Model {
  declare id: number;

  declare fullname: string;

  declare storeId: string;

  declare createdAt: Date;

  declare updatedAt: Date;
}

SellersModel.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullname: { type: DataTypes.STRING, allowNull: true },
  storeId: { type: DataTypes.INTEGER, allowNull: true },
  createdAt: DataTypes.TIME,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'SellersModel',
  timestamps: true,
  underscored: true,
  tableName: 'sellers',
});

export default SellersModel;
