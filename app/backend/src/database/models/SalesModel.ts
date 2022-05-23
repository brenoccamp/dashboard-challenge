import { DataTypes, Model } from 'sequelize';
import db from '.';
import SellersModel from './SellersModel';
import ProductsServicesModel from './ProductsServicesModel';
import CustomersModel from './CustomersModel';
import StoresModel from './StoresModel';

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
  saleDate: { type: DataTypes.DATE },
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'SalesModel',
  updatedAt: true,
  createdAt: false,
  underscored: true,
  tableName: 'sales',
});

SalesModel.hasOne(SellersModel, { foreignKey: 'id', as: 'seller' });
SalesModel.hasOne(ProductsServicesModel, { foreignKey: 'id', as: 'product_service' });
SalesModel.hasOne(CustomersModel, { foreignKey: 'id', as: 'customer' });
SalesModel.hasOne(StoresModel, { foreignKey: 'id', as: 'store' });

export default SalesModel;
