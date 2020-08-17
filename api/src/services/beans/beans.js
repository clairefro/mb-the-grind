import { db } from 'src/lib/db'

export const beans = () => {
  return db.bean.findMany({ orderBy: { createdAt: 'desc' } })
}

// export const beans = ({ sort }) => {
//   return db.bean.findMany({ orderBy: { sort } })
// }
// export const beans = ({ sort }) => {
//   console.log(sort)
//   return db.bean.findMany({ orderBy: sort ? { sort } : null })
// }
// export const beans = (sort) => {
//   const orderBy = {
//     [sort.field]: sort.order.toLowerCase(),
//   }
//   return db.bean.findMany({ orderBy })
// }

export const bean = ({ id }) => {
  return db.bean.findOne({
    where: { id },
  })
}

export const createBean = ({ input }) => {
  return db.bean.create({
    data: input,
  })
}

export const updateBean = ({ id, input }) => {
  return db.bean.update({
    data: input,
    where: { id },
  })
}

export const deleteBean = ({ id }) => {
  return db.bean.delete({
    where: { id },
  })
}

export const Bean = {
  comments: (_obj, { root }) =>
    db.bean.findOne({ where: { id: root.id } }).comments(),
}
