import { DataTypes, Model } from 'sequelize';
import db from '.';

class ProductsServicesModel extends Model {
  declare id: number;

  declare name: string;

  declare price: number;

  declare createdAt: Date;

  declare updatedAt: Date;
}

ProductsServicesModel.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'ProductsServicesModel',
  timestamps: true,
  underscored: true,
  tableName: 'products_services',
});

export default ProductsServicesModel;
