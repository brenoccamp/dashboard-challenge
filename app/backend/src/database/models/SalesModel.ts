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

SalesModel.belongsTo(SellersModel, { foreignKey: 'sellerId', as: 'seller' });
SalesModel.belongsTo(ProductsServicesModel, {
  foreignKey: 'productServiceId',
  as: 'product_service',
});
SalesModel.belongsTo(CustomersModel, { foreignKey: 'customerId', as: 'customer' });
SalesModel.belongsTo(StoresModel, { foreignKey: 'storeId', as: 'store' });

export default SalesModel;
