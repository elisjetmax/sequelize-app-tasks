import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
import { sequelize } from "../db/connections";

export interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  status: number;
}

interface TaskModel extends Model<TaskAttributes>, TaskAttributes {}

const Tasks = sequelize.define<TaskModel>("Task", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
  status: {
    type: DataType.INTEGER,
    allowNull: false,
  },
});

export default Tasks;
