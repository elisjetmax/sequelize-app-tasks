import Comments, { CommentAttributes } from "../models/Comments.model";

export default class CommentsController {
  constructor() {}

  public async getAllCommentsByTaskId(taskId: number) {
    const comments = await Comments.findAll({ where: { taskId } });
    return comments;
  }

  public async getCommentById(id: number) {
    const comment = await Comments.findByPk(id);
    return comment;
  }

  public async createComment(comment: CommentAttributes) {
    const newComment = await Comments.create(comment);
    return newComment;
  }

  public async updateComment(id: number, comment: CommentAttributes) {
    const updatedComment = await Comments.update(comment, { where: { id } });
    return updatedComment;
  }

  public async deleteComment(id: number) {
    const deletedComment = await Comments.destroy({ where: { id } });
    return deletedComment;
  }
}
