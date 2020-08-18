import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Comment = ({ comment }) => {
  const { addMessage } = useFlash()
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.comments())
      addMessage('Comment deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete comment ' + id + '?')) {
      deleteComment({ variables: { id } })
    }
  }

  return <div className="">{comment.body}</div>
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
