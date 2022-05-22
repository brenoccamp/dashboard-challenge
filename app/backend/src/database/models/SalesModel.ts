import { DataTypes, Model } from 'sequelize';
import db from '.';

class SalesModel extends Model {
  declare id: number;

  declare sellerId: number;

  declare productServiceId: number;

  declare customerId: number;

  declare storeId: number;

  declare soldAmount: number;

  declare saleDate: Date;

  declare updatedAt: Date;
}

SalesModel.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  sellerId: { type: DataTypes.INTEGER, allowNull: false },
  productServiceId: { type: DataTypes.INTEGER, allowNull: false },
  customerId: { type: DataTypes.INTEGER, allowNull: false },
  storeId: { type: DataTypes.INTEGER, allowNull: false },
  soldAmount: { type: DataTypes.INTEGER, allowNull: false },
  saleDate: { type: DataTypes.DATE, field: 'saleDate' },
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'SalesModel',
  timestamps: true,
  underscored: true,
  tableName: 'sales',
});

export default SalesModel;
