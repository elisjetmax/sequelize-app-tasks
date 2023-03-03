import Tasks, { TaskAttributes } from "../models/Tasks.models";

export default class TasksController {
  constructor() {}

  public async getAllTasks() {
    const tasks = await Tasks.findAll();
    return tasks;
  }

  public async getTaskById(id: number) {
    const task = await Tasks.findByPk(id);
    return task;
  }

  public async createTask(task: TaskAttributes) {
    const newTask = await Tasks.create(task);
    return newTask;
  }

  public async updateTask(id: number, task: TaskAttributes) {
    const updatedTask = await Tasks.update(task, { where: { id } });
    return updatedTask;
  }

  public async deleteTask(id: number) {
    const deletedTask = await Tasks.destroy({ where: { id } });
    return deletedTask;
  }
}
