import { DataTypes, Model } from 'sequelize';
import db from '.';

class StoresModel extends Model {
  declare id: number;

  declare name: string;

  declare city: string;

  declare state: string;

  declare createdAt: Date;

  declare updatedAt: Date;
}

StoresModel.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'StoresModel',
  timestamps: true,
  underscored: true,
  tableName: 'stores',
});

export default StoresModel;
