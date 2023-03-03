import { Model } from "sequelize";
import { sequelize } from "../db/connections";
import { DataType } from "sequelize-typescript";

export interface CommentAttributes {
  id: number;
  taskId: number;
  comment: string;
}

interface CommentModel extends Model<CommentAttributes>, CommentAttributes {}

const Comments = sequelize.define<CommentModel>("Comment", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  taskId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataType.STRING,
    allowNull: false,
  },
});

export default Comments;
