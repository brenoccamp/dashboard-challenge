import { DataTypes, Model } from 'sequelize';
import db from '.';

class CustomersModel extends Model {
  declare id: number;

  declare fullname: string;

  // declare city: string;

  declare state: string;

  declare createdAt: Date;

  declare updatedAt: Date;
}

CustomersModel.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  // city: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'CustomersModel',
  timestamps: true,
  underscored: true,
  tableName: 'customers',
});

export default CustomersModel;
