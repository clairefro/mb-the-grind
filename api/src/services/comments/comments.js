import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany({ orderBy: { createdAt: 'desc' } })
}

export const comment = ({ id }) => {
  return db.comment.findOne({
    where: { id },
  })
}

// ALTERED TO CREATE ASSOCIATION
export const createComment = ({ input }) => {
  return db.comment.create({
    data: {
      body: input.body,
      username: input.username,
      bean: { connect: { id: input.beanId } },
    },
  })
}

export const updateComment = ({ id, input }) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment = {
  bean: (_obj, { root }) =>
    db.comment.findOne({ where: { id: root.id } }).bean(),
}
