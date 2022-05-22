import { DataTypes, Model } from 'sequelize';
import db from '.';

class SalesModel extends Model {
  declare id: number;

  declare sellerId: number;

  declare productServiceId: number;

  declare customerId: number;

  declare storeId: number;

  declare soldAmount: number;

  declare createdAt: Date;

  declare updatedAt: Date;
}

SalesModel.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'SalesModel',
  timestamps: true,
  underscored: true,
  tableName: 'sales',
});

export default SalesModel;
