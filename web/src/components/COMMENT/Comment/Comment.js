import { useMutation, useFlash } from '@redwoodjs/web'
import { routes, navigate } from '@redwoodjs/router'

import Message from '../../common/message.js'
//
// const DELETE_COMMENT_MUTATION = gql`
//   mutation DeleteCommentMutation($id: Int!) {
//     deleteComment(id: $id) {
//       id
//     }
//   }
// `

const Comment = ({ comment }) => {
  // const { addMessage } = useFlash()
  // const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
  //   onCompleted: () => {
  //     navigate(routes.comments())
  //     addMessage('Comment deleted.', { classes: 'rw-flash-success' })
  //   },
  // })

  // const onDeleteClick = (id) => {
  //   if (confirm('Are you sure you want to delete comment ' + id + '?')) {
  //     deleteComment({ variables: { id } })
  //   }
  // }

  return (
    <div className="p-4 my-2 shadow  bg-white">
      <Message
        body={comment.body}
        username={comment.username}
        createdAt={comment.createdAt}
      />
    </div>
  )
}

// <span>{timeTag(comment.createdAt)}</span>
// <nav className="rw-button-group">
//   <Link
//     to={routes.editComment({ id: comment.id })}
//     className="rw-button "
//   >
//     Edit
//   </Link>
//   <a
//     href="#"
//     className="rw-button rw-button-red"
//     onClick={() => onDeleteClick(comment.id)}
//   >
//     Delete
//   </a>
// </nav>

export default Comment
