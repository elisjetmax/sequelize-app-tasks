import Comments from "../models/Comments.model";
import Tasks from "../models/Tasks.models";
import Users from "../models/Users.model";

Users.hasMany(Tasks);
Tasks.belongsTo(Users);
Tasks.hasMany(Comments);
Comments.belongsTo(Tasks);
