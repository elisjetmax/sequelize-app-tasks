import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../db/connections";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}

const Users = sequelize.define<UserModel>("User", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  },
});

export default Users;
