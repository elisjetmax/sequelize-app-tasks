import Users, { UserAttributes } from "../models/Users.model";

export default class UserController {
  constructor() {}

  public async getAllUsers() {
    const users = await Users.findAll();
    return users;
  }

  public async getUserById(id: number) {
    const user = await Users.findByPk(id);
    return user;
  }

  public async createUser(UserAttributes: UserAttributes) {
    const user = await Users.create(UserAttributes);
    return user;
  }

  public async updateUser(id: number, UserAttributes: UserAttributes) {
    const user = await Users.update(UserAttributes, { where: { id } });
    return user;
  }

  public async deleteUser(id: number) {
    const user = await Users.destroy({ where: { id } });
    return user;
  }
}
